import React, {createContext, useState, useContext} from "react";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);
    const [userRoles, setUserRoles] = useState([]);

    const login = (newToken) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);
        setIsAuthenticated(true);

        const decodedToken = jwtDecode(newToken);
        setUserRoles(decodedToken.roles || []);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setIsAuthenticated(false);
        setUserRoles([]);
    };

    return (
        <AuthContext.Provider value={{token, isAuthenticated, userRoles, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
