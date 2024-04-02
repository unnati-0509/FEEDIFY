import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
        <div >
          <Navbar />
          <Toaster psition="bottom-right" toastOptions={{ duration: 2000 }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          {/* <Home /> */}
        </div>
    </>
  );
}

export default App;
