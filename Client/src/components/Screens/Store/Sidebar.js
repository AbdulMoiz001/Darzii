import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({setFilter}) => {
    const [selectedOption, setSelectedOption] = useState('all');

    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
        setFilter(option);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-title">Filters</div>
            <ul className="sidebar-list">
                <li className={`sidebar-item ${selectedOption === 'all' ? 'active' : ''}`}>
                    <input
                        type="checkbox"
                        className="sidebar-checkbox"
                        checked={selectedOption === 'all'}
                        onChange={() => handleCheckboxChange('all')}
                    />
                    <label className="sidebar-label">All</label>
                </li>
                <li className={`sidebar-item ${selectedOption === 'featured' ? 'active' : ''}`}>
                    <input
                        type="checkbox"
                        className="sidebar-checkbox"
                        checked={selectedOption === 'featured'}
                        onChange={() => handleCheckboxChange('featured')}
                    />
                    <label className="sidebar-label">Featured</label>
                </li>
                <li className={`sidebar-item ${selectedOption === 'new-arrival' ? 'active' : ''}`}>
                    <input
                        type="checkbox"
                        className="sidebar-checkbox"
                        checked={selectedOption === 'new-arrival'}
                        onChange={() => handleCheckboxChange('new-arrival')}
                    />
                    <label className="sidebar-label">New Arrival</label>
                </li>
                <li className={`sidebar-item ${selectedOption === 'trending' ? 'active' : ''}`}>
                    <input
                        type="checkbox"
                        className="sidebar-checkbox"
                        checked={selectedOption === 'trending'}
                        onChange={() => handleCheckboxChange('trending')}
                    />
                    <label className="sidebar-label">Trending</label>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;