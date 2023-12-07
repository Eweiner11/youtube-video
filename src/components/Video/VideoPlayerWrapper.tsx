import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Video } from '../../typings/Video';
import { useVideo } from '../../contexts/VideoListContext';

interface videoPlayer {
  videoConfig: Video;
  idx:number;
}

const VideoPlayerWrapper = ({ videoConfig,idx }: videoPlayer) => {
  const {
    url,
    volume,
    seekto,
    playing
  }:Video = videoConfig

  const playerRef = useRef<any>(null);
  const {updateVideo} = useVideo()


    const handlePlay = () => {
      updateVideo('playing',true,idx)
    };
    const handlePause = () => {
      console.log('Media is playing or resumed');
    };
  // const onReady = React.useCallback(() => {
  //   playerRef.current.seekTo(67.758406, 'seconds');
  // }, [playerRef.current]);


  const playerWrapperStyle: React.CSSProperties = {
    position: 'relative',
    paddingTop: '56.25%', // 16:9 aspect ratio
    height: 0, // This makes the padding top act as the height
    width: '100%',
    objectFit: "cover"
  };

  const playerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover"
  };


  return (
    <div style={playerWrapperStyle}>
      <ReactPlayer
        url={url}
        style={playerStyle}
        width='100%'
        height='100%'
        playing={playing}
        controls
        volume={volume}
        onProgress={(progress) => {
          console.log(progress.playedSeconds);
        }}
        onStart={handlePlay}
        ref={playerRef}
      />
    </div>
  );
};

export default VideoPlayerWrapper;
