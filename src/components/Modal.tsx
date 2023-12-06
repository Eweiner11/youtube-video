import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Modal as MUImodal,Typography } from '@mui/material';

// Type definition for props
interface BasicModalProps {
  title: string;
  children: React.ReactNode;
  buttonLabel?: string; // Optional prop for button label
  customStyle?: React.CSSProperties; // Optional prop for custom styles
}

const defaultStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  title,
  children,
  buttonLabel = 'Open modal', // Default button label
  customStyle = {}
}: BasicModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Merge default style with custom style
  const modalStyle = { ...defaultStyle, ...customStyle };

  return (
    <div>
      <Button onClick={handleOpen}>{buttonLabel}</Button>
      <MUImodal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <div id="modal-modal-description" style={{ marginTop:2 }}>
            {children}
          </div>
        </Box>
      </MUImodal>
    </div>
  );
}
