import React, { useState } from 'react'
import './Topbar.css'
import Uimage from '../imgs/userIconImg.jpg'
import { FaQuestionCircle } from 'react-icons/fa'

function Topbar() {
    const [UserName, setUserName] = useState('Default')
    return (
        <div className='TopbarBox'>
            <div className='Wicon'>
                Welcome...
            </div>
            <div className='Qicon'><FaQuestionCircle /></div>
            <div className='UBox'>
                <img className='Uimage' src={Uimage} alt="user" />
                <div className='Uname'>{UserName}</div>
            </div>

        </div>
    )
}

export default Topbar