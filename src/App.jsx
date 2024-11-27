import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "/src/components/landing/Landing";
import Login from "./components/signin/Login";
import Update from "./components/signin/Update";
import Forgot from "./components/signin/Forgot";
import Create from "./components/signin/Create";
import Plan from "./components/signin/Plan";
import Review from "./components/signin/Review";
import Verification from "./components/signin/Verification";
import "./assets/styles/index.css";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forgot-password" element={<Forgot />} />
        <Route path="/login/forgot-password/verification" element={<Verification />} />
        <Route path="/login/new-password" element={<Update />} />
        <Route path="/sign-up" element={<Create />} />
        <Route path="/sign-up/plan" element={<Plan />} />
        <Route path="/sign-up/review" element={<Review />} />
      </Routes>
    </Router>
   </FormProvider>
  );
}

export default App;
