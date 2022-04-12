import React from "react";
import {
    Routes, 
    Route 
} from "react-router-dom";

import Home from "./pages/home/Index";
import Dashboard from "./pages/dashboard/Index";
import Genres from "./pages/genre/Index";
import Books from "./pages/book/Index";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/genres" element={<Genres/>}/>
            <Route path="/books" element={<Books/>}></Route>
        </Routes>
    );
}