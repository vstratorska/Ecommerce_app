import React from "react";
import {useAuth} from "./AuthContext";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? children : <Navigate to="/login"/>;
};

export default ProtectedRoute;