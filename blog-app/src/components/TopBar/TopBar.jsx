import React from 'react';
import { AppBar, Box, CardMedia } from '@mui/material';
import { NavLinkStyled, TopBarContainer } from './styled';
import { NavLink } from 'react-router-dom';
import Mobile from './components/Mobile/Mobile';
import Desktop from './components/Desktop/Desktop';

const TopBar = () => {
    return (
        <AppBar position="relative" sx={{ padding: '0px 25px' }}>
            <Desktop />
            <Mobile />
        </AppBar>
    );
};

export default TopBar;
