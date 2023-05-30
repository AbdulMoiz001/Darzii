import React from "react";
import "./css/WHinfo.css";
import { FaChevronRight } from "react-icons/fa";

function WHinfo() {
  return (
    <div className="DazriInfoBox">
      <div className="info">Warehouse Managers</div>
      <div className="infoCard">
        <label>Add Products</label>

        <a className="infoL" href="/wh-manager/AddProduct">
          <FaChevronRight />
        </a>
      </div>
      <div className="infoCard">
        <label>Manage Products</label>

        <a className="infoL" href="/wh-manager/manage">
          <FaChevronRight />
        </a>
      </div>

      <div className="infoCard">
        <label>Warehouse information</label>

        <a className="infoL" href="/wh-manager/users">
          <FaChevronRight />
        </a>
      </div>
    </div>
  );
}

export default WHinfo;
