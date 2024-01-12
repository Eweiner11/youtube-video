import MainContent from "../layout/MainContent";
import { useVideo } from "../contexts/VideoListContext";
import VideoPlayerWrapper from "./VideoPlayerWrapper";

const VideoPlayerGrid = () => {
  const { videos, volumes } = useVideo();

  const gridStyle = {
    gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(videos.length))}, 1fr)`,
    gridTemplateRows: `repeat(${Math.ceil(
      videos.length / Math.ceil(Math.sqrt(videos.length)),
    )}, 1fr)`,
    alignItems: "center",
  };

  return (
    <MainContent style={gridStyle}>
      {videos.map((video: string | null, index: number) => (
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

export default VideoPlayerGrid;
// api key = AIzaSyDww1kUVYoCUFQiSFQJZbGqdtkUbyCYnUs
