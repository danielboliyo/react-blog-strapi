import React from 'react';
import { MenuItems, MenuMobile } from './styled';
import HomeIcon from '@mui/icons-material/Home';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
//import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Box, Drawer } from '@mui/material';

const Mobile = () => {
    return (
        <MenuMobile>
            <Drawer
                anchor="bottom"
                hideBackdrop
                variant="permanent"
                open={window.innerWidth < 960 ? true : false}
                //onClose={handleCloseDrawer}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '100%',
                        padding: '20px 20px'
                    }
                }}
            >
                <Box display="flex" justifyContent="center" alignItems="center" gap={5}>
                    <MenuItems to="/explore">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <HomeIcon fontSize="large" />
                            <div>Explore</div>
                        </Box>
                    </MenuItems>
                    <MenuItems to="/create">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <IntegrationInstructionsIcon fontSize="large" />
                            <div>Crear</div>
                        </Box>
                    </MenuItems>
                    {/* <MenuItems to="/explore">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <ContactMailIcon fontSize="large" />
                            <div>Contact</div>
                        </Box>
                    </MenuItems> */}
                    <MenuItems to="/about">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <LogoDevIcon fontSize="large" />
                            <div>About</div>
                        </Box>
                    </MenuItems>
                </Box>
            </Drawer>
        </MenuMobile>
    );
};

export default Mobile;
