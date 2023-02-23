import React from 'react'
import { useState } from 'react'
import PasswordSettings from './PasswordSettings'
import "./css/Settings.css"

function Settings() {

    let [settingType, setSettingType] = useState("password");
    let child

    switch (settingType) {
        case settingType === "password":
            child = <PasswordSettings />
            break;

        default:
            break;
    }


    return (
        <>
            <div className='MainBox'>
                <div className='NameBox'>
                    <div className='NameDiv' onClick={() => { setSettingType("password") }}>
                        Password Settings
                    </div>

                    <div className='NameDiv' onClick={() => { setSettingType("nothings") }}>
                        Password Settings
                    </div>

                    <div className='NameDiv' onClick={() => { setSettingType("nothing") }}>
                        Password Settings
                    </div>
                </div>

                <div className='DetailBox'>
                    {settingType === "password" && <PasswordSettings />}
                </div>
            </div>
        </>
    )
}
export default Settings