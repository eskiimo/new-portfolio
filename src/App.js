import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Palestine from "./pages/pl";
import Nav from "./components/nav";
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pl" element={<Palestine />} />
      </Routes>
    </Router>
  );
};

export default App;
