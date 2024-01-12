import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

// Define the initial grid items
const initialGridItems = [
  { id: "1", content: "1" },
  { id: "2", content: "2" },
  { id: "3", content: "3" },
  { id: "4", content: "4" },
];

const GridComponent = () => {
  const [gridItems, setGridItems] = useState(initialGridItems);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const newItems = Array.from(gridItems);
    const [relocatedItem] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, relocatedItem);

    setGridItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="grid" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "8px",
            }}
          >
            {gridItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      userSelect: "none",
                      padding: "20px",
                      margin: "0",
                      minHeight: "50px",
                      backgroundColor: "#f4f4f4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "4px",
                    }}
                  >
                    {item.content}
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

export default GridComponent;
