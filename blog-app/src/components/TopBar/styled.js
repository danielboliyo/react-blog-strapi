import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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
`;

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-weight: 600;
    font-size: 1.2rem;
`;
