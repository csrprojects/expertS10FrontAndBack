import { createContext, useContext } from 'react';

export const AuthContext = createContext({});

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
