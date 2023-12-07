import {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from "react";

interface VideoContextState {
  videos: string[];
  setVideos: React.Dispatch<React.SetStateAction<string[]>>;
  removeVideo: (index: number) => void;
  addVideo: (video: string) => void;
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  changeVolume: (num: number, idx: number) => void;
  volumes: number[];
}

interface VideoProviderProps {
  children: ReactNode;
}
// interface Video {
//     url: string ;
//     volume: number;
//     seekto?:number
//   }

export const VideoContext = createContext<VideoContextState | undefined>(
  undefined,
);


export const VideoProvider = ({ children }: VideoProviderProps): ReactElement => {
    const [videos, setVideos] = useState<(string)[]>([]);
    const [isFullScreen,setFullScreen] = useState(false)
    const [volumes,setVolumes] = useState<number[]>([0,0,0,0])

  const changeVolume = (num: number, idx: number) => {
    const copy = volumes.slice();
    copy[idx] = num;
    setVolumes(copy);
  };

  const removeVideo = (index: number) => {
    setVideos((currentVideos) => currentVideos.filter((_, i) => i !== index));
  };
  const toggleFullScreen = () => {
    setFullScreen((prev: boolean) => !prev);
  };

  const addVideo = (video: string) => {
    setVideos((currentVideos) => {
      // Check to ensure no more than 4 videos
      if (currentVideos.length >= 4) {
        alert("You can only add up to 4 videos.");
        return currentVideos;
      }
      return [...currentVideos, video];
    });
  };

  const providerValue = {
    videos,
    setVideos,
    removeVideo,
    addVideo,
    isFullScreen,
    toggleFullScreen,
    changeVolume,
    volumes,
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
    throw new Error("useVideo must be used within a VideoProvider");
  }

  return context;
}
