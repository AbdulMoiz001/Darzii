import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rider">Rider</Link>
        </li>
        <li>
          <Link to="/darzii">Darzii</Link>
        </li>
        <li>
          <Link to="/wh-manager">Warehouse Manager</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
