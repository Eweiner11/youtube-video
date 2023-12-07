import MainContent from '../../layout/MainContent';
import { useVideo } from '../../contexts/VideoListContext';
import VideoPlayerWrapper from './VideoPlayerWrapper';
import { Video } from '../../typings/Video';
import VideoInputModal from './VideoInputModal';

const VideoGrid = () => {

  const { videos } = useVideo();
  const gridStyle:React.CSSProperties = {
    gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(videos.length))}, 1fr)`,
    gridTemplateRows: `repeat(${Math.ceil(videos.length / Math.ceil(Math.sqrt(videos.length)))}, auto)`,
    textAlign:'center'

  };
  const length = 4 - videos.length
  const addVideoArray = new Array(length).fill("")

  return (
    <MainContent style={gridStyle}>
      {videos?.map((video: Video, idx: number) => (
        <VideoPlayerWrapper key={video.id} videoConfig={video} idx={idx} />
      ))}
      {videos.length > 1 && addVideoArray.map((_: any) => {
        return <VideoInputModal />
      })}
    </MainContent>
  );
};

export default VideoGrid;
// api key = AIzaSyDww1kUVYoCUFQiSFQJZbGqdtkUbyCYnUs

