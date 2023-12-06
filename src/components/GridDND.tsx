import { useEffect, useState } from "react";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import { useVideo } from "../contexts/VideoListContext";
import { Paper } from "@mui/material";

export default function GridDND() {
  const [items, setItems] = useState<number[]>([0, 1, 2, 3]);
  const { videos, setVideos } = useVideo();

  useEffect(() => {
    const videoArr: null[] = new Array(videos.length).fill(null);
    setItems(videoArr.map((_: null, idx: number) => idx));
  }, [videos]);

  // function swapArrayItems(arr: any, index1: any, index2: any) {
  //   const result = [...arr];
  //   [result[index1], result[index2]] = [result[index2], result[index1]];
  //   return result;
  // }
  function onChange(
    _: string,
    // sourceId: string,
    sourceIndex: number,
    targetIndex: number,
  ): void {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
    const videoState = swap(videos, sourceIndex, targetIndex);
    setVideos(videoState);
  }

  return (
    <div className="grid-container">
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={2} /* Adjust if necessary */
          rowHeight={50} /* Adjust if necessary */
          style={{ height: 50 * Math.ceil(items.length / 2), gap: "10px" }}
        >
          {items.map((item: number) => {
            const isDragging = false;
            const itemClassName = `grid-item ${isDragging ? "dragging" : ""}`;
            return (
              <Paper>
                <GridItem key={item} className={itemClassName}>
                  <div>{item}</div>
                </GridItem>
              </Paper>
            );
          })}
        </GridDropZone>
      </GridContextProvider>
    </div>
  );
}

