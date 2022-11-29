import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// import "./script";
import Phobdaw from "./view/phobdaw";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Phobdaw />} />
      </Routes>
    </Router>
  );
}

export default App;
