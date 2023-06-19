import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import router from './Routes/router';
import { RouterProvider } from 'react-router-dom';
import theme from './theme/theme';

const App = () => {
    return (
        <>
            <CssBaseline />
                <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
};

export default App;