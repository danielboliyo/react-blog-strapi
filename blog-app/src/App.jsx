import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import router from './Routes/router';
import { RouterProvider } from 'react-router-dom';
import theme from './theme/theme';
import BlogsProvider from './context/BlogsContext';

const App = () => {
    return (
        <BlogsProvider>
            <CssBaseline />
                <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </BlogsProvider>
    );
};

export default App;