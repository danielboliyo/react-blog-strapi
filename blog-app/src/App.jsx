import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import router from './Routes/router';
import { RouterProvider } from 'react-router-dom';
import theme from './theme/theme';
import OnLineProvider from './context/OnLineProvider';

const App = () => {
    return (
        <OnLineProvider>
            <CssBaseline />
                <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </OnLineProvider>
    );
};

export default App;