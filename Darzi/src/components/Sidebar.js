import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a href="/">Dashboard</a>
                </li>
                <li>
                    <a href="/orders">Orders</a>
                </li>
                <li>
                    <a href="/incoming-orders">Incoming Orders</a>
                </li>
                <li>
                    <a href="/payments">Payments</a>
                </li>
                <li>
                    <a href="/appointment">Appointments</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;