import styled from '@emotion/styled';
import { Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const MenuDesktop = styled(Toolbar)`
    display: flex;
    //media query from tablet to mobile
    @media (max-width: 960px) {
        display: none;
    }
`;

export const MenuItems = styled.div`
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease-in-out;
    &:hover {
        border-bottom: 2px solid #fff;
    }
`;

export const TopBarContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #000;
    box-shadow: none;
    @media (max-width: 960px) {
        display: none;
    }
`;

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-weight: 600;
    font-size: 1.2rem;
`;
