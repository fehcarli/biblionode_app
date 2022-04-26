import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./component/Header";

import Routes from "./pages/Routes"

function App() {
  return(
      <Router>
          <Header/>
          <Routes/>
          <Footer/>
      </Router>
  );
}

export default App;
