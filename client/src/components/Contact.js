import React from 'react'
import MapSection from './Map' // import the map here

export default function Contact() {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      } // our location object from earlier
  return (
    <>
        <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    </>
  );
}



