import React from "react";
import "./Admin.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RiderForm from "./Forms/RiderForm";
import WHManagerForm from "./Forms/WHManagerForm";
import DarziiForm from "./Forms/DarziiForm";
import Navbar from "../../Navbar/Navbar";
import Dashboard from "./Dashboard.jsx";
import Sidebar from "../../Sidebar/Sidebar";
import Topbar from "../../Topbar/Topbar";
function Admin() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Topbar />
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route path="rider" element={<RiderForm />} />
        <Route path="rider" element={<RiderForm />} />
        <Route path="darzii" element={<DarziiForm />} />
        <Route path="wh-manager" element={<WHManagerForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Admin;
