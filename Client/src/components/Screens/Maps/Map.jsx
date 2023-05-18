import React, { useEffect, useState } from 'react';
import { Marker, GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 24.90128935919415,
    lng: 67.12061598638903
};

function MyComponent({ tailors }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBPK5vF5NcPMtpuKPHWdYU5Og1vIw7K1as"
    });

    const [map, setMap] = React.useState(null);
    const [tailorLocation, setTailorLocation] = useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);


    }, []);

    const onUnmount = React.useCallback(function callback() {
        setMap(null);
    }, []);


    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                    console.log(userLocation);
                },
                (error) => {
                    console.log(error.message);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }, [])

    const calRadius = (uLat, uLng, tLat, tLng) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = ((tLat - uLat) * Math.PI) / 180;
        const dLon = ((tLng - uLng) * Math.PI) / 180;

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((uLat * Math.PI) / 180) *
            Math.cos((tLat * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = R * c;
        console.log(distance);
    }

    // calRadius(userLocation.lat, userLocation.lng, tailors[0].lat, tailors[0].lng)
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={1}
            onLoad={onLoad}
            onUnmount={onUnmount}

        >
            {tailorLocation && (
                <Marker position={center}>
                </Marker>
            )}
        </GoogleMap>
    ) : <></>;
}

export default React.memo(MyComponent);
