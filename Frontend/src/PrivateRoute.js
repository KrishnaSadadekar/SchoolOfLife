import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from './components/auth/auth';
import { useState } from 'react';
const PrivateRoute = () => {
    const [isAuthenticated, setAuthenticated] = useState(isLogin);
    // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;