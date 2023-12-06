import React, { useState } from 'react';
import { useVideo } from '../contexts/VideoListContext';

const VideoInput = () => {
  const { addVideo } = useVideo();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
    addVideo(inputValue);
    setInputValue(''); // Clear the input after adding the video
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add video URL"
        style={{ width: 'calc(100% - 50px)', marginRight: '10px' }}
      />
      <button type="submit" style={{ width: '40px' }}>Add</button>
    </form>
  );
};

export default VideoInput;
