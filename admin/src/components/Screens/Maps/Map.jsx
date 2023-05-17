import React, { useState } from 'react';
import { Marker, GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 24.90128935919415,
    lng: 67.12061598638903

};

function MyComponent({ DarziCoordinates, setDarziCoordinates }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBPK5vF5NcPMtpuKPHWdYU5Og1vIw7K1as"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    const [TailorLocation, setTailorLocation] = useState(null);
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={1}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={(e) => {
                const coordinates = {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                };
                setTailorLocation(coordinates);
                setDarziCoordinates(coordinates);

            }}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <>

                <Marker
                    position={TailorLocation}
                >

                </Marker>
            </>
        </GoogleMap >
    ) : <></>
}

export default React.memo(MyComponent)