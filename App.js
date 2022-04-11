import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import Routes from './routes';
import Header from "./pages/fragments/Header";
import Footer from "./pages/fragments/Footer";

function App() {
    return(
        <Router>
            <Header />
            <Routes />
            <Footer />
        </Router>
    );
}

export default App;
