import React from 'react';
import { MenuDesktop, NavLinkStyled, TopBarContainer } from './styled';
import { Box, CardMedia } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Desktop = () => {
    return (
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
    );
};

export default Desktop;
