import React, { useEffect, useState } from 'react';

export const OnLineContext = React.createContext();

const OnLineProvider = ({ children }) => {
    const [isOmline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        const handleOnlineStatus = () => setIsOnline(navigator.onLine);
        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);
        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOnlineStatus);
        };
      }, []);
    return (
        <OnLineContext.Provider value={{ isOmline }}>
            {children}
        </OnLineContext.Provider>
    );
};

export default OnLineProvider;
