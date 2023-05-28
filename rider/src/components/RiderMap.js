import React, { useEffect, useState } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer, Marker } from '@react-google-maps/api';
const RiderMap = () => {

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
    const mapOptions = {
      zoom: 13,
      center: { lat: lat, lng: lng },
      gestureHandling: 'greedy'
    };
  
    const [directions, setDirections] = React.useState(null);

  // Define the origin and destination addresses
  const origin = {lat: lat,lng:lng};
  const destination = {lat: 24.926295 , lng: 67.130499};
  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.log('Directions request failed:', response.status);
      }
    }
  };

  
//   useEffect(() => {
      
//       const animateDirections = (timestamp) => {
//         // Perform animation logic here
    
//         // Request the next animation frame
//         if (window.requestAnimationFrame) {
//           window.requestAnimationFrame(animateDirections);
//         }
//       };
      
//     // Start the animation loop
//     if (window.requestAnimationFrame) {
//       window.requestAnimationFrame(animateDirections);
//     }

//     // Clean up the animation loop
//     return () => {
//       if (window.cancelAnimationFrame) {
//         window.cancelAnimationFrame(animateDirections);
//       }
//     };
//   }, []);


  
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMap mapContainerStyle={{ height: '100%', width: '100%' }} options={mapOptions}>
        {directions && <DirectionsRenderer directions={directions} />}
        <DirectionsService
          options={{
            origin: origin,
            destination: destination,
            travelMode: 'DRIVING'
          }}
          callback={directionsCallback}
        />
        <Marker position={{ lat: lat, lng: lng }} />
      </GoogleMap>
    </div>
  );
  };
  
  export default RiderMap;
  