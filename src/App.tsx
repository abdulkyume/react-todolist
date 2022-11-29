import React from "react";
import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<LogIn/>} />
        <Route  path="/signup" element={<SignUp/>} />
        <Route  path="/forgetPassword" element={<ForgetPassword/>} />
        <Route  path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
