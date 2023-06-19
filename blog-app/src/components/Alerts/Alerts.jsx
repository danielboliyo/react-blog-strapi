import React, { useContext, useEffect, useState } from 'react';
import { Alert, Container } from '@mui/material';
import { OnLineContext } from '../../context/OnLineProvider';

const Alerts = () => {
    const { isOnline } = useContext(OnLineContext);
    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
        if (isOnline) {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 5000);
      
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isOnline]);
    return (
        <Container maxWidth="lg">
            {showAlert && isOnline && (
                <Alert severity="success" onClose={() => setShowAlert(false)}>
                    You are online!
                </Alert>
            )}
            {showAlert && !isOnline && (
                <Alert severity="error">You are offline!</Alert>
            )}
        </Container>
    );
};

export default Alerts;
