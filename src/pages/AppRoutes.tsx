import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from './login/LoginForm';
import MainForm from '../pages/app/MainForm';
import NotFound from './NotFound';

function AppRoutes() {
    let isAuthorized = sessionStorage.getItem("isAuthorized");
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthorized) navigate("/login"); 
        else navigate("/app")
    }, [])
    
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/app/*" element={<MainForm />}> 
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </>
    )
}

export default AppRoutes;