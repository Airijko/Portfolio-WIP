import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import MainNavbar from "./Components/MainNavbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

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
          <Route path="/About" element={<About/>} />
          <Route path="/Projects" element={<Projects/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
