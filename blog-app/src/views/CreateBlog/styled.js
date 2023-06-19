import styled from '@emotion/styled';
import { Container, InputBase } from '@mui/material';

export const Formstyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

/* export const Preview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`; */

export const InputBaseStyled = styled(InputBase)`
    border: 1px solid #f3f3f3;
    border-radius: 10px;
    width: 100%;
`;

export const ContainerStyled = styled(Container)`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;
