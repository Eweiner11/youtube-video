import { createContext, useContext, useState, ReactNode, ReactElement } from 'react';


interface VideoProviderProps {
    children: ReactNode;
}
import { Video,VideoContextState } from '../typings/Video';
import axios from 'axios';
export const VideoContext = createContext<VideoContextState | undefined>(undefined);

export const VideoProvider = ({ children }: VideoProviderProps): ReactElement => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [isFullScreen, setFullScreen] = useState(false)
    const [volumes, setVolumes] = useState<number[]>([0, 0, 0, 0])

    const changeVolume = (num: number, idx: number) => {
        const copy = videos.slice()
        copy[idx].volume = num
        setVideos(copy)
    }

    async function getVideoInfo(videoUrl: string) {
        try {
          const videoId = new URL(videoUrl).searchParams.get('v');
          const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
              key: 'AIzaSyDww1kUVYoCUFQiSFQJZbGqdtkUbyCYnUs',
              id: videoId,
              part: 'snippet,contentDetails,statistics', 
            },
          });

          if (response.status === 200) {
            const videoInfo = response.data.items[0]; 
            return videoInfo
            // Print the video information
            console.log('Video Title:', videoInfo.snippet.title);
            console.log('Video Description:', videoInfo.snippet.description);
            console.log('Video Views:', videoInfo.statistics.viewCount);
            console.log('Video Duration:', videoInfo.contentDetails.duration);
          } else {
            console.error('Error fetching video information:', response.statusText);
          }
        } catch (error: any) {
          console.error('Error:', error.message);
        }
      }

    const removeVideo = (index: number) => {
        setVideos((currentVideos) => currentVideos.filter((_, i) => i !== index));
    };
    const updateVideo = <K extends keyof Video>(key: K, value: Video[K], idx: number) => {
        const copy: Video[] = [...videos];
        const updatedVideo: Video = { ...copy[idx] };
        updatedVideo[key] = value;
        copy[idx] = updatedVideo;
        setVideos(copy);
      }

      
    const toggleFullScreen = () => {
        setFullScreen((prev: boolean) => !prev)
    }

    const addVideo = async (video: Video) => {
        try {
          setVideos((currentVideos) => {
            // Check to ensure no more than 4 videos
            if (currentVideos.length >= 4) {
              alert('You can only add up to 4 videos.');
              return currentVideos;
            }
            return [...currentVideos,video]
          });
        } catch (error:any) {
          console.error('Error:', error.message);
        }
      };
    const providerValue = {
        videos,
        setVideos,
        removeVideo,
        addVideo,
        isFullScreen,
        changeVolume,
        toggleFullScreen,
        getVideoInfo,
        updateVideo,
        volumes
    };

    return (
        <VideoContext.Provider value={providerValue}>
            {children}
        </VideoContext.Provider>
    );
};

export function useVideo(): VideoContextState {
    const context = useContext(VideoContext);

    if (context === undefined) {
        throw new Error('useVideo must be used within a VideoProvider');
    }

    return context;
}
