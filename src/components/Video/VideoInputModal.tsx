import React, { useState } from "react";
import { useVideo } from "../../contexts/VideoListContext";
import { VideoInfo, Video } from "../../typings/Video";
import Modal from "../Modal";
import { Button, TextField, Tooltip, styled } from "@mui/material";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import { StyledTextField } from "../StyledComponents";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";

const VideoInputModal = () => {
  const { addVideo, getVideoInfo } = useVideo();
  const [inputValue, setInputValue] = useState<string>("");
  const [addModal, toggleAddModal] = useState<boolean>(false);

  const sampleVid = {
    volume: 1,
    seekto: 5,
  };

  const processYouTubeVideo = async (url: string) => {
    const videoInfo: VideoInfo = await getVideoInfo(url);
    if (videoInfo) {
      const videoTitle = videoInfo.snippet?.title || "";
      addVideo({ ...sampleVid, url, name: videoTitle, id: uuidv4() });
    }
  };

  const isYouTubeVideo = (url: string) =>
    url.includes("www.youtube.com/watch?v=");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const canPlay = ReactPlayer.canPlay(inputValue);
      if (!canPlay) {
        toast.error("Video source is not supported.");
        return;
      }

      if (isYouTubeVideo(inputValue)) {
        await processYouTubeVideo(inputValue);
      } else {
        addVideo({
          ...sampleVid,
          url: inputValue,
          name: inputValue,
          id: uuidv4(),
        });
      }

      setInputValue("");
    } catch (error) {
      console.error(
        "Error:",
        error instanceof Error ? error.message : String(error),
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
        <Modal
          openModal={addModal}
          title="Add Video"
          buttonLabel="Submit"
          handleSubmit={handleSubmit}
          handleClose={() => toggleAddModal(false)}
        >
          <StyledTextField
            fullWidth
            label="Video URL"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            variant="outlined"
            margin="normal"
          />
        </Modal>
      </form>
      <Tooltip title={"add video"} placement="left">
        <AddIcon
          style={{ cursor: "pointer" }}
          fontSize="large"
          onClick={(e) => {
            e.preventDefault();
            toggleAddModal(true);
          }}
        />
      </Tooltip>
    </>
  );
};

export default VideoInputModal;
