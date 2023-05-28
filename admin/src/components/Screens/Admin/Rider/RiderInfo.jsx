import React from 'react';
import "./css/RiderInfo.css";
import { FaChevronRight } from 'react-icons/fa'


function RiderInfo() {
    return (
        <div className='DazriInfoBox'>
            <div className='info'>Rider</div>
            <div className='infoCard'>
                <label>
                    Add Rider
                </label>

                <a className='infoL' href="/rider/register"><FaChevronRight /></a>

            </div>
            <div className='infoCard'>
                <label>
                    Delete Rider
                </label>

                <a className='infoL' href="/rider/delete"><FaChevronRight /></a>

            </div>

            <div className='infoCard'>
                <label>
                    Edit Rider information
                </label>

                <a className='infoL' href="/rider/users"><FaChevronRight /></a>

            </div>



        </div>
    )
}

export default RiderInfo