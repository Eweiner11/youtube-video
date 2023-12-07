import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useVideo } from "../../contexts/VideoListContext";

interface VolumeSliderTypes {
  idx: number;
  initialVal: number;
}

export default function VolumeSlider({ idx, initialVal }: VolumeSliderTypes) {
  const [value, setValue] = React.useState<number>(initialVal);
  const { changeVolume } = useVideo();
  const [muted, setMuted] = React.useState(false);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    changeVolume(newValue as number, idx);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown
          onClick={(e: any) => handleChange(e, 0)}
          cursor={"pointer"}
        />
        <Slider
          aria-label="Volume"
          value={value}
          onChange={handleChange}
          min={0}
          max={1}
          step={0.01}
        />
        <VolumeUp onClick={(e: any) => handleChange(e, 1)} cursor={"pointer"} />
      </Stack>
    </Box>
  );
}

