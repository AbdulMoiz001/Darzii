import React from "react";
import "./Admin.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminNavbar from "../../Navbar/AdminNavbar/AdminNavbar";
import RiderForm from "./Forms/RiderForm";
import WHManagerForm from "./Forms/WHManagerForm";
import DarziiForm from "./Forms/DarziiForm";

function Admin() {
  return (
    <BrowserRouter>
      <AdminNavbar />
      <Routes>
        <Route
          path=""
          element={
            <div className="AdminHome">
              <h1>Welcome! Admin,</h1>
              <div className="AdminHomepage center"></div>
            </div>
          }
        />
        <Route path="rider" element={<RiderForm />} />
        <Route path="darzii" element={<DarziiForm />} />
        <Route path="wh-manager" element={<WHManagerForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Admin;
