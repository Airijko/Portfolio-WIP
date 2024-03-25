import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

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
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MainNavbar />
        <div className="background h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
