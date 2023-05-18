import React, {useContext} from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext/AuthContext';

const Profile = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { firstName, lastName, email, phone, addresses } = user;

    function onLogout() {
        localStorage.clear();
        console.log('localStorage cleared!');
        navigate('/');
        window.location.reload();
    }

    return (
        <div className="user-profile-container">
            <div className="profile-header">
                <h2>User Profile</h2>
                <button className="logout-button" onClick={onLogout}>
                    Logout
                </button>
            </div>
            <div className="profile-details">
                <h3>Name: {firstName} {lastName}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <h3>Addresses:</h3>
                {addresses.map((address, index) => (
                    <div key={index} className="address">
                        <p>{address.addressName}</p>
                        <p>City: {address.city}</p>
                        <p>Area: {address.area}</p>
                        <p>Address: {address.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
