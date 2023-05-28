import React, { useEffect, useState } from 'react'
import { LoadScript } from '@react-google-maps/api';
// import dotenv from 'dotenv';
import RiderMap from './RiderMap';
const DeliveryMenu = () => {
    // dotenv.config();
    
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()

    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLat(latitude)
              setLng(longitude)

            //   console.log('User location:', latitude, longitude);
              // Do something with the user's location
            },
            (error) => {
              console.error('Error getting user location:', error);
              // Handle error getting user location
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser');
          // Handle browser not supporting geolocation
        }
      }, []);
    
    //   return <div>Getting user location...</div>;
 
    return (
        <LoadScript googleMapsApiKey={"AIzaSyBozbjjELZbqo9YLsQtD-8HuB1fa8zms48"}>
            <RiderMap />
        </LoadScript>
      )
  
}

export default DeliveryMenu