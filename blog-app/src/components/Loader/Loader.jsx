import React from 'react';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ open, onClose }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={onClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Loader;
