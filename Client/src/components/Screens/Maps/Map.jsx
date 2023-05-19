import React, { useEffect, useState } from 'react';
import { Marker, GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};


function MyComponent({ tailors }) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBPK5vF5NcPMtpuKPHWdYU5Og1vIw7K1as"
    });


    const [userLocation, setUserLocation] = useState(null);
    const [zoom, setZoom] = useState(14);


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.log(error.message);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }, []);


    //------------------------------------------------------radius-----------------------------------------------------
    function calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLng = (lng2 - lng1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in kilometers
        return distance;
    }

    // Assuming userLocation and tailors array are available
    const radius = 5; // Radius in kilometers
    const tailorsWithinRadius = userLocation ? tailors.filter((tailor) => {
        const distance = calculateDistance(
            userLocation.lat,
            userLocation.lng,
            tailor.lat,
            tailor.lng
        );
        return distance <= radius;
    }) : null;
    //------------------------------------------------------radius-----------------------------------------------------

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(userLocation);
        map.fitBounds(bounds);


        setMap(map);
    }, [userLocation]);

    const onUnmount = React.useCallback(function callback() {
        setMap(null);
    }, []);

    return isLoaded && userLocation ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={userLocation}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {userLocation && <Marker position={userLocation} />}


            {tailorsWithinRadius.map((tailor) => (
                <Marker key={tailor.id} position={{ lat: tailor.lat, lng: tailor.lng }} />
            ))}

        </GoogleMap>
    ) : <></>;




}

export default React.memo(MyComponent);
