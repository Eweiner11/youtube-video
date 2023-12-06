import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

interface videoPlayer {
  url?: string;
  embedCode:string;
  volume: number;
}

const VideoPlayerWrapper = ({ url,embedCode, volume }: videoPlayer) => {
  // This container style will maintain the 16:9 aspect ratio

  const playerRef = useRef<any>(null);

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

  const renderPlayer = () => {
    if (url) {
      return (
        <ReactPlayer
          url={url}
          style={playerStyle}
          width='100%'
          height='100%'
          playing
          controls
          volume={volume}
          onProgress={(progress) => {
            console.log(progress.playedSeconds);
          }}
          ref={playerRef}
        />
      );
    } else if (embedCode) {
      // Using dangerouslySetInnerHTML to render embed code
      return <div dangerouslySetInnerHTML={{ __html: embedCode }} />;
    }

    return <p>No video URL or embed code provided.</p>;
  };

  return (
    <div style={playerWrapperStyle}>
      {renderPlayer()}
    </div>
  );
};

export default VideoPlayerWrapper;
