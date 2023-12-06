import React, { useEffect, useRef } from 'react';
import { useVideo } from '../contexts/VideoListContext';

interface MainContentProps {
  children: React.ReactNode;
  style?: React.CSSProperties; 
}

const MainContent: React.FC<MainContentProps> = ({ children, style }) => {
    const {isFullScreen,toggleFullScreen} = useVideo()
    const fullScreenRef = useRef<any>(null);

    const toggleFS = () => {
      if (fullScreenRef.current) {
        if (!document.fullscreenElement) {
          fullScreenRef.current.requestFullscreen().catch((err:any) => {
            alert(`Error attempting to enable full-screen mode: ${err.message}`);
          });
          toggleFullScreen()
        } else {
          document.exitFullscreen();
          toggleFullScreen()
        }
      }
    };
    useEffect(()=>{
    isFullScreen && toggleFS()
    },[isFullScreen])
  
  return (
    <div ref = {fullScreenRef} className="main-content" style={style}>
      {children}
    </div>
  );
};

export default MainContent;
