import React, { useEffect, useState } from 'react';

export const OnLineContext = React.createContext();

const OnLineProvider = ({ children }) => {
    const [onLine, setOnLine] = useState(navigator.onLine);
    useEffect(() => {
        const handleOnLine = () => setOnLine(true);
        window.addEventListener('online', handleOnLine);
        window.addEventListener('offline', () => setOnLine(false));
        return () => {
            window.removeEventListener('online', handleOnLine);
            window.removeEventListener('offline', () => setOnLine(false));
        }
    }, []);
    return (
        <OnLineContext.Provider value={{ onLine }}>
            {children}
        </OnLineContext.Provider>
    );
};

export default OnLineProvider;
