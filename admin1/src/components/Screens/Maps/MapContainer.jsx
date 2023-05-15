import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export const MapContainer = ({ google }) => {
    const mapStyles = {
        width: '100%',
        height: '400px',
    };

    const tailorLocations = [
        { lat: 24.92539179266862, lng: 67.1756010096032 },
        { lat: 24.936560779620834, lng: 67.18268204105814 },
    ];

    const userLocation = { lat: 24.90124567674854, lng: 67.11527807199082 }; // Replace with the actual user's latitude and longitude

    return (
        <Map google={google} zoom={14} style={mapStyles} initialCenter={userLocation}>
            {tailorLocations.map((location, index) => (
                <Marker key={index} position={location} title="Tailor" />
            ))}
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBPK5vF5NcPMtpuKPHWdYU5Og1vIw7K1as', // Replace with your actual Google Maps API key
})(MapContainer);
