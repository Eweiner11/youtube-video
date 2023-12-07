import MainContent from "../../layout/MainContent";
import { useVideo } from "../../contexts/VideoListContext";
import VideoPlayerWrapper from "./VideoPlayerWrapper";
import { Video } from "../../typings/Video";

const VideoGrid = () => {
  const { videos } = useVideo();
  const gridStyle = {
    gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(videos.length))}, 1fr)`,
    gridTemplateRows: `repeat(${Math.ceil(
      videos.length / Math.ceil(Math.sqrt(videos.length)),
    )}, 1fr)`,
  };

  return (
    <MainContent style={gridStyle}>
      {videos?.map((video: Video, idx: number) => (
        <VideoPlayerWrapper key={video.id} videoConfig={video} idx={idx} />
      ))}
    </MainContent>
  );
};

export default VideoGrid;
// api key = AIzaSyDww1kUVYoCUFQiSFQJZbGqdtkUbyCYnUs

