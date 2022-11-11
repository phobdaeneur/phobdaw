import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Menus from "./mobile/menu";
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
