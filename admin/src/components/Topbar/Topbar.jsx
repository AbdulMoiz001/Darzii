import React, { useState } from 'react'
import './Topbar.css'
import Uimage from '../imgs/userIconImg.jpg'
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa'
import { AuthContext } from "../../context//authContext/AuthContext";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom"

function Topbar() {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();



    const [profileClicked, setProfileClicked] = useState(false);
    const handleClick = () => {
        setProfileClicked(!profileClicked);

    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
        window.location.reload();
    }
    return (

        <div className='TopbarBox' >
            <div className='Wicon'>
                Welcome Admin
            </div>
            <div className='Qicon'><FaQuestionCircle /></div>
            <div className='UBox'>
                <img className='Uimage' src={Uimage} alt="user" />
                <div className='Uname'>{user.firstName}</div>
                <div className='arrow' onClick={handleClick}>
                    {profileClicked ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div className={profileClicked ? "profileBox active" : "profileBox inactive"}>
                    <div className='pitem'>Acounts</div>
                    <div className='pitem' onClick={handleLogout}><button>Logout</button></div>
                </div>
            </div>

        </div>
    )
}

export default Topbar