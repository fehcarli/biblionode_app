import React from "react";
import {
    Routes, 
    Route 
} from "react-router-dom";

import Home from "./home/Index";
import Dashboard from "./dashboard/Index";
import Genres from "./genre/Index";
import Books from "./book/Index";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/genres" element={<Genres/>}/>
            <Route path="/books" element={<Books/>}/>
        </Routes>
    );
}