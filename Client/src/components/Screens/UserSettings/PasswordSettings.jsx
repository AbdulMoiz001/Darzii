import React from 'react'
import { useState, useEffect } from 'react'
import "./css/PasswordSettiings.css"

function PasswordSettings(props) {
    const [password, setPass] = useState("1234");
    const [newPass, setNewPass] = useState("");
    const [reNewPass, setReNewPass] = useState("");

    useEffect(() => {
        if (reNewPass !== newPass) {
            document.getElementsByClassName('unique')[0].innerHTML = "Password does not match";
        }
        else {
            document.getElementsByClassName('unique')[0].innerHTML = "";

        }
    });


    const CheckCondtion = (event) => {
        setReNewPass(event.target.value);
    }

    const handlePasswordReq = {

    }

    return (
        <>
            <div className='PMainBox'>
                <p>Password Settings</p>
                <input className='Pinput' type="text" placeholder='New Password'
                    onInput={(e) => { setNewPass(e.target.value); console.log(newPass) }} />
                <input type="text" className='Pinput' placeholder='Retype New Password' onInput={CheckCondtion} />

                {<p className='unique'></p>}

                <input type="text" className='Pinput' /*value={password}*/ placeholder='Current Password' /*{onChange = {(e) => {setNewPass(e.target.value)}*/ />

                <button className='SubmittB' type='submit' onClick={handlePasswordReq}>Submit</button>
            </div>
        </>
    )
}

export default PasswordSettings
