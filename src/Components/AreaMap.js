/**
 * Renders a map of Western Sydney using Leaflet.
 * @component
 */

import React from 'react'
import {useRef} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

/**
 * Define the bounds for Western Sydney.
 * @type {Array.<Array.<number>>}
 */
const westernSydneyBounds = [
  [-33.786, 150.827], // Southwest coordinates
  [-33.657, 150.946]  // Northeast coordinates (Annangrove)
];

/**
 * Functional component for rendering the map.
 * @returns {JSX.Element} The rendered map component.
 */

function AreaMap() {
/**
   * Reference to the map container.
   * @type {React.RefObject<MapContainer>}
   */
  const mapRef = useRef(null);

/**
   * Callback function called when the map is created.
   * @param {MapContainer} map - The Leaflet map object.
   */

 const handleMap = (map) =>{
  mapRef.current = map;
  map.fitBounds(westernSydneyBounds)
 }
 
  return (
   
        <MapContainer  center={[-33.727, 150.852]} zoom={12} whenCreated={handleMap} zoomControl={false} dragging={false} scrollWheelZoom={false} doubleClickZoom={false} style={{width:"100%", height: "100%"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
  )
}

export default AreaMap