import { createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: '#fff',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    background: '#fff',
                    boxShadow: 'none',
                },
            },
        }
    }
});

export default theme;
