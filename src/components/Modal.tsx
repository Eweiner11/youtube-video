import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Modal as MUImodal, Typography } from '@mui/material';
import { toast } from 'react-toastify';


interface BasicModalProps {
  title: string;
  children: React.ReactNode;
  openModal: boolean;
  handleClose: (event: any) => void;
  buttonLabel?: string; 
  customStyle?: React.CSSProperties;
  handleSubmit?: (event: any) => void;
}

const defaultStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
  borderRadius: '10px',
  p: 4,
  color: '#333',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
};

export default function BasicModal({
  title,
  children,
  buttonLabel = 'Open modal', // Default button label
  customStyle = {},
  openModal,
  handleSubmit,
  handleClose
}: BasicModalProps) {
  const onFormSubmit = (e: any) => {
    if (handleSubmit) {
      handleSubmit(e);
    }
    handleClose(e); 
  };

  // Merge default style with custom style
  const modalStyle = { ...defaultStyle, ...customStyle };

  return (
    <div>
      <MUImodal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <div id="modal-modal-description" style={{ marginTop: 2 }}>
            {children}
          </div>
          {buttonLabel && (
            <Button
              onClick={onFormSubmit}
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}
            >
              {buttonLabel}
            </Button>
          )}
        </Box>
      </MUImodal>
    </div>
  );
}