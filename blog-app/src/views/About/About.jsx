import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <h1>Lily & Daniel</h1>
            <Typography variant="body1" gutterBottom>
                A couple who are passionate about photography and travel blogging. 
                With their sharp eye for visuals and engaging content, 
                they take their followers on a journey to some of the world’s most stunning 
                destinations. Follow their adventures and get inspired to explore the world.
            </Typography>
        </Container>
    );
};

export default About;
