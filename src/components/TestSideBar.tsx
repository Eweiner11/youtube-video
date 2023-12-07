import { Box, Button, Divider, Tooltip, styled } from "@mui/material"
import { useVideo } from "../contexts/VideoListContext"
import { Video } from "../typings/Video"
import VideoInputModal from "./Video/VideoInputModal"
import GridDND from "./GridDND"
import VolumeSlider from "./Video/VolumeSlider"
import { useState } from "react"
import {  ButtonContainer, StyledSideButton } from "./StyledComponents"
import {oneVid,twoVid, threeVid, fourVid} from '../assets/TestData'

export const TestSideBar = () => {
    const { videos, setVideos, toggleFullScreen, removeVideo, updateVideo } = useVideo()
    const [showButtons, setShowButtons] = useState(false);
    const toggleButtonContainer = () => {
        setShowButtons(!showButtons);
    };

    const sampleVid: any = {
        volume: 0,
        seekto: 5,
        playing: false,
        name: 'test name'
    }
    const togglePlayer = (video: Video, idx: number) => updateVideo('playing', !video.playing, idx)

    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledSideButton onClick={toggleButtonContainer} sx={{ alignSelf: 'center' }}>
                {showButtons ? 'Hide Buttons' : 'Show Buttons'}
            </StyledSideButton>
            {showButtons && (<ButtonContainer>
                <StyledSideButton onClick={() => setVideos([{ ...sampleVid, url: oneVid }])}>1</StyledSideButton>
                <StyledSideButton onClick={() => setVideos(twoVid.map(item => ({ ...sampleVid, url: item })))}>2</StyledSideButton>
                <StyledSideButton onClick={() => setVideos(threeVid.map(item => ({ ...sampleVid, url: item })))}>3</StyledSideButton>
                <StyledSideButton onClick={() => setVideos(fourVid.map(item => ({ ...sampleVid, url: item })))}>4</StyledSideButton>
            </ButtonContainer>
            )}
            {videos.length !== 0 && <StyledSideButton onClick={() => toggleFullScreen()}>Full Screen</StyledSideButton>}
            <VideoInputModal />

            {videos.map((video, idx) => (
                <Box key={idx} sx={{ padding: '10px' }}>
                    <Divider light style={{ marginBottom: '10px' }} />
                    <Tooltip title="Remove Video" placement="top">
                        <Button onClick={() => removeVideo(idx)} sx={{ textTransform: 'none', justifyContent: 'start' }}>
                            {video?.name || video?.url}
                        </Button>
                    </Tooltip>
                    <VolumeSlider initialVal={video.volume} idx={idx} />
                    <StyledSideButton onClick={() => togglePlayer(video, idx)}>
                        {video.playing ? 'Stop' : 'Start'}
                    </StyledSideButton>
                </Box>
            ))}

        </Box>
            <GridDND />
        </>
    );
};
