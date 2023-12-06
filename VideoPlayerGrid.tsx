import React from 'react';
import ReactPlayer from 'react-player';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface VideoPlayerGridProps {
  videoUrls: string[];
}

const VideoPlayerGrid: React.FC<VideoPlayerGridProps> = ({ videoUrls }) => {
  const gridStyle = (count: number) => {
    switch (count) {
      case 1: return { gridTemplateColumns: '1fr', gridTemplateRows: '1fr' };
      case 2: return { gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr' };
      case 3: // Define style for 3 videos (perhaps 1 on top and 2 at bottom)
      case 4: return { gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' };
      default: return {};
    }
  };

  const onDragEnd = (result: any) => {
    // Handle rearranging video URLs on drag end
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ display: 'grid', height: '100vh', ...gridStyle(videoUrls.length) }}
          >
            {videoUrls.map((url, index) => (
              <Draggable key={url} draggableId={url} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ReactPlayer url={url} width="100%" height="100%" />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default VideoPlayerGrid;