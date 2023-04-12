import React from "react";
import './StoreScreen.css';
import Sidebar from "./Sidebar";
import Store from "./Store";

function StoreScreen(){
    return(
        <div className="StoreScreen"><Sidebar /><Store /></div>
    );
}

export default StoreScreen;