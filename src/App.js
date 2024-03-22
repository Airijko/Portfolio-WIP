import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import MainNavbar from "./Components/MainNavbar";
import Footer from "./Components/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div
        className="App background"
        id={load ? "no-scroll" : "scroll"}>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
