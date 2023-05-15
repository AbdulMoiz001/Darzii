import React, { useState } from 'react'
import './Topbar.css'
import Uimage from '../imgs/userIconImg.jpg'
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa'

function Topbar() {

    const [profileClicked, setProfileClicked] = useState(false);
    const [UserName, setUserName] = useState('Default');
    const handleClick = () => {
        setProfileClicked(!profileClicked);
    }
    return (
        <div className='TopbarBox'>
            <div className='Wicon'>
                Welcome...
            </div>
            <div className='Qicon'><FaQuestionCircle /></div>
            <div className='UBox'>
                <img className='Uimage' src={Uimage} alt="user" />
                <div className='Uname'>{UserName}</div>
                <div className='arrow' onClick={handleClick}>
                    {profileClicked ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div className={profileClicked ? "profileBox active" : "profileBox inactive"}>
                    <div className='pitem'>Acounts</div>
                    <div className='pitem'>Logout</div>
                </div>
            </div>

        </div>
    )
}

export default Topbar