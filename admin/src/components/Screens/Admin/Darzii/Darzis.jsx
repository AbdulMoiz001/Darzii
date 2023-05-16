import React from 'react'
import "./css/Darzis.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const DarziInfo = [

    {
        TailorID: 2001,
        Username: ' test',
        TailorName: 'Elegant Tailors',
        phone: '0300-7452125',
        firstName: "Rashid",
        lastName: "Khurshid",
        email: "elegant.tailor90@gmail.com",
        CNIC: "42201-1548466-9",
        address: "Shop# 05, Pari Mall, Qaidabad, Karachi, Sindh, Pakistan",
        skill: "Femail Shalwar Kameez",
        card: "darziCard"

    },

    {
        TailorID: 2021,
        Username: ' test 1',
        TailorName: 'Elegant Tailors',
        phone: '0300-7452125',
        firstName: "Rashid",
        lastName: "Khurshid",
        email: "elegant.tailor90@gmail.com",
        CNIC: "42201-1548466-9",
        address: "Shop# 05, Pari Mall, Qaidabad, Karachi, Sindh, Pakistan",
        skill: "Femail Shalwar Kameez",
        card: "darziCard",


    },

    {
        TailorID: 2321,
        Username: ' test 2 ',
        TailorName: 'Elegant Tailors',
        phone: '0300-7452125',
        firstName: "Rashid",
        lastName: "Khurshid",
        email: "elegant.tailor90@gmail.com",
        CNIC: "42201-1548466-9",
        address: "Shop# 05, Pari Mall, Qaidabad, Karachi, Sindh, Pakistan",
        skill: "Femail Shalwar Kameez",
        card: "darziCard"

    },


]

function Darzis() {
    return (
        <div className='Darzis'>

            <div className='info'>
                <h4> <a href="/darzii/">

                    <FaChevronLeft />
                    Darziies
                </a>
                </h4>
                <hr></hr>
            </div>


            {DarziInfo.map((item, index) => {
                return (
                    <div className={item.card} key={index}>
                        <div className='darziiTitle'>
                            <label>
                                ID :
                                {item.TailorID}
                            </label>
                        </div>
                        <div className='darziiTitle'>
                            <label>
                                Name :
                                {item.Username}
                            </label>
                        </div>


                        <div className=' infoBox'>
                            <label htmlFor="TailorName">Tailor Name:</label>
                            <span>
                                {item.TailorName}
                            </span>

                        </div>

                        <div className='infoBox'>
                            <label htmlFor="FirstName"> First Name: </label>
                            <span>{item.firstName}</span>
                        </div>

                        <div className='infoBox'>
                            <label htmlFor="LastName"> Last Name: </label>
                            <span>{item.lastName}</span>
                        </div>

                        <div className='infoBox address' >
                            <label htmlFor="Address">Address: </label>
                            <span>{item.address}</span>

                        </div>

                        <div className='viewitem'><a href={`/darzii/edit?item=${encodeURIComponent(JSON.stringify(item))}`}>View More  <FaChevronRight /></a></div>


                    </div>
                )
            })}



        </div>
    );
}


export default Darzis;