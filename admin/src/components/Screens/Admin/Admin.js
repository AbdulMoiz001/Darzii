import React from "react";
import "./Admin.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RiderForm from "./Forms/RiderForm";
import WHManagerForm from "./Forms/WHManagerForm";
import DarziForm from "./Forms/DarziiForm";
import Dashboard from "./Dashboard.jsx";
import Sidebar from "../../Sidebar/Sidebar";
import Topbar from "../../Topbar/Topbar";
import DarziInfo from "./Darzii/DarziInfo";
import DeleteDarzi from "./Darzii/DeleteDarzii";
import EditDarzi from "./Darzii/EditDarzi";
import Darzis from "./Darzii/Darzis";

import WHinfo from "./WareHouse Manager/WHinfo";
import DeleteWH from "./WareHouse Manager/DeleteWH";

import { AuthContextProvider } from "../../../context/authContext/AuthContext";
function Admin() {


  return (
    <BrowserRouter>

      <AuthContextProvider>
        <Sidebar />
        <Topbar />
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route path="/rider/register" element={<RiderForm />} />

          <Route path="/darzii" element={<DarziInfo />} />
          <Route path="/darzii/register" element={<DarziForm />} />
          <Route path="/darzii/delete" element={<DeleteDarzi />} />
          <Route path="/darzii/users" element={<Darzis />} />
          <Route path="/darzii/edit" element={<EditDarzi />} />

          <Route path="/wh-manager" element={<WHinfo />} />
          <Route path="/wh-manager/register" element={<WHManagerForm />} />
          <Route path="/wh-manager/delete" element={<DeleteWH />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default Admin;
