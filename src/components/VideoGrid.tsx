import MainContent from "../layout/MainContent";
import { useVideo } from "../contexts/VideoListContext";
import VideoPlayerWrapper from "./VideoPlayerWrapper";
// import { useEffect, useRef } from 'react';

const VideoGrid = () => {
  const { videos, volumes } = useVideo();

  const gridStyle = {
    gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(videos.length))}, 1fr)`,
    gridTemplateRows: `repeat(${Math.ceil(
      videos.length / Math.ceil(Math.sqrt(videos.length)),
    )}, 1fr)`,
  };

  return (
    <MainContent style={gridStyle}>
      {videos.map((video: string | null, index: number) => (
        //need to add uniqu key to each video
        <VideoPlayerWrapper
          key={video}
          url={video || undefined}
          volume={volumes[index]}
          embedCode=""
        />
      ))}
    </MainContent>
  );
};

export default VideoGrid;
// api key = AIzaSyDww1kUVYoCUFQiSFQJZbGqdtkUbyCYnUs

