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
import DarziInfo from "./Darzii/DarziInfo";
import DeleteDarzii from "./Darzii/DeleteDarzii";
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
        <Route path="/rider/register" element={<RiderForm />} />

        <Route path="/darzii" element={<DarziInfo />} />
        <Route path="/darzii/register" element={<DarziiForm />} />
        <Route path="/darzii/delete" element={<DeleteDarzii />} />

        <Route path="/wh-manager/register" element={<WHManagerForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Admin;
