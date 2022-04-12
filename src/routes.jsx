import React from "react";
import {
    Routes, 
    Route 
} from "react-router-dom";

import Home from "./pages/home/Index";
import Dashboard from "./Pages/dashboard/Index";
import Genres from "./Pages/genre/Index";
import Books from "./pages/books/Index";

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