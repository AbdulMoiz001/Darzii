import React from 'react';
import "./css/DarziInfo.css";
import { FaChevronRight } from 'react-icons/fa'


function DarziInfo() {
    return (
        <div className='DazriInfoBox'>
            <div className='info'>Darzi</div>
            <div className='infoCard'>
                <label>
                    Add Darzi
                </label>

                <a className='infoL' href="/darzii/register"><FaChevronRight /></a>

            </div>
            <div className='infoCard'>
                <label>
                    Delete Darzi
                </label>

                <a className='infoL' href="/darzii/delete"><FaChevronRight /></a>

            </div>

            <div className='infoCard'>
                <label>
                    Edit Darzi information
                </label>

                <a className='infoL' href="/darzii/users"><FaChevronRight /></a>

            </div>



        </div>
    )
}

export default DarziInfo