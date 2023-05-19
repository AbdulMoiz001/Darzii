import React, { useEffect, useState } from 'react';
import { Marker, GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '300px',
    height: '300px'
};


function MyComponent({ tlat, tlng }) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBPK5vF5NcPMtpuKPHWdYU5Og1vIw7K1as"
    });


    const [shopLocation, setShopLocation] = useState({
        lat: parseFloat(tlat),
        lng: parseFloat(tlng)
    });

    const [zoom, setZoom] = useState(14);


    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(shopLocation);
        map.fitBounds(bounds);


        setMap(map);
    }, [shopLocation]);

    const onUnmount = React.useCallback(function callback() {
        setMap(null);
    }, []);

    return isLoaded && shopLocation ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={shopLocation}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {shopLocation && <Marker position={shopLocation} />}


        </GoogleMap>
    ) : <></>;




}

export default React.memo(MyComponent);
