import React, { FC, useState, useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomeList from "../pages/Home/List"
import Login from "../pages/Login/Login"
import NotFound from "../pages/NotFound/NotFound"
import ProtectedRoute from "./ProtectedRoute";
import "../components/FontawesomeIcons/index"



const App: FC = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/home" element={<ProtectedRoute><HomeList/></ProtectedRoute>}/>
                    <Route path="/" element={<ProtectedRoute><HomeList /></ProtectedRoute>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App