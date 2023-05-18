import React from 'react';
import "./css/WHinfo.css"
import { FaChevronRight } from 'react-icons/fa';

function WHinfo() {
    return (
        <div className='DazriInfoBox'>
            <div className='info'>Warehouse Managers</div>
            <div className='infoCard'>
                <label>
                    Add Warehouse Managers
                </label>

                <a className='infoL' href="/wh-manager/register"><FaChevronRight /></a>

            </div>
            <div className='infoCard'>
                <label>
                    Delete Warehouse Managers
                </label>

                <a className='infoL' href="/wh-manager/delete"><FaChevronRight /></a>

            </div>

            <div className='infoCard'>
                <label>
                    Edit Warehouse Managers information
                </label>

                <a className='infoL' href="/wh-manager/users"><FaChevronRight /></a>

            </div>



        </div>
    );
}

export default WHinfo