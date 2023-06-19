import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const MenuItems = styled(NavLink)`
    //color for icons and title for menu mobile
    color: #000;
    font-weight: 600;
    font-size: 1.2rem;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
`;

export const MenuMobile = styled(Box)`
    display: flex;
    //media query from tablet to mobile
    @media (min-width: 960px) {
        display: none;
    }
`;