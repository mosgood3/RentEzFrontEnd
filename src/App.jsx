import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Login from "./landing/signin/Login";
import Update from "./landing/signin/Update";
import Forgot from "./landing/signin/Forgot";
import Verification from "./landing/signin/Verification";
import "./assets/styles/index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forgot-password" element={<Forgot />} />
        <Route path="/login/forgot-password/verification" element={<Verification />} />
        <Route path="/login/new-password" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
