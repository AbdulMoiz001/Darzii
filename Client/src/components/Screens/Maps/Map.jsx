import React, { useEffect, useState } from 'react';
import { Marker, GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};


function MyComponent({ userLocation, tailorsWithinRadius, radius }) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBPK5vF5NcPMtpuKPHWdYU5Og1vIw7K1as"
    });
    const [zoom, setZoom] = useState(8);

    useEffect(() => {
        if (radius > 20) {
            setZoom(12);
        }
        else {
            setZoom(18);
        }
    }, [radius])



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
                <Marker key={tailor._id} position={{ lat: tailor.lat, lng: tailor.lng }} />
            ))}

        </GoogleMap>
    ) : <></>;




}

export default React.memo(MyComponent);
