import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";

export const StyledButton = styled(Button)({
    backgroundColor: '#007bff', // Custom color
    color: 'white',
    padding: '10px 20px',
    '&:hover': {
        backgroundColor: '#0056b3', // Darker on hover
    },
    boxShadow: '0px 2px 5px rgba(0,0,0,0.2)', // Subtle shadow
    borderRadius: '5px', // Rounded corners
    fontFamily: '"Roboto", sans-serif', // Modern font
});

export const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#007bff', // Custom focus color
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#007bff', // Custom border color on focus
        },
        borderRadius: '5px', // Rounded corners
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)', // Subtle shadow
    },
});


export const StyledSideButton = styled(Button)({
    backgroundColor: '#007bff',
    color: 'white',
    '&:hover': {
        backgroundColor: '#0056b3',
    },
    margin: '5px',
    padding: '10px 20px',
    borderRadius: '5px',
});

export const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '10px 0',
});

