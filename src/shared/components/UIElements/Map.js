import React, { useEffect, useRef } from 'react'
import './Map.css'

// AIzaSyAtTMJGR0u_WseoR1tUpWDzDI1xh7wB0Pc
const Map = ({ center, zoom, className, style }) => {
  const mapRef = useRef()
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    })
    new window.google.maps.Marker({ position: center, map })
  }, [center, zoom])

  return <div ref={mapRef} className={`map ${className}`} style={style} />
}

export default Map
