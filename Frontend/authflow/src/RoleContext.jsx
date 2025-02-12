import React, { createContext, useState, useContext } from 'react';

export const RoleContext = createContext();

export function RoleProvider({ children }) {
    const [role, setRole] = useState(null);  

    return (
        <RoleContext.Provider value={{ role, setRole }}>
            {children}
        </RoleContext.Provider>
    );
}

export function useRole() {
    return useContext(RoleContext);
}
