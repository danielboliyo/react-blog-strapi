import React from 'react';
import { AppBar, Box, CardMedia } from '@mui/material';
import { NavLinkStyled, TopBarContainer } from './styled';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
    return (
        <AppBar position='relative' sx={{ padding: 1 }}>
            <TopBarContainer>
                <Box flex={1}>
                    <NavLink to='/explore'>
                        <CardMedia
                            component="img"
                            image='/logo.png'
                            alt="travelBlog logo"
                            sx={{ width: 100, height: 100 }}
                        />
                    </NavLink>
                </Box>
                <Box flex={1} />
                <Box flex={1} display="flex" justifyContent="flex-end" gap={5} alignItems="center">
                    <NavLinkStyled to='/explore'>Explorar</NavLinkStyled>
                    <NavLinkStyled to='/create'>Crear</NavLinkStyled>
                    <NavLinkStyled to='/about'>About</NavLinkStyled>
                </Box>
            </TopBarContainer>
        </AppBar>
    );
};

export default TopBar;
