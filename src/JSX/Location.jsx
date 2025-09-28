import "../CSS/Location.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function Location() {
    return (
        <div className="location-page">
            <h1 className="location-title">Hta Naung Yeik - Location</h1>
            <div className="location-content">
                <MapContainer className="location-map" zoom={20} center={[16.71388, 98.58937]}>
                    <TileLayer
                      className="location-tile-layer"
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    <Marker position={[16.71388, 98.58937]}>
                      <Popup>Hta Naung Yeik</Popup>
                    </Marker>
                </MapContainer>
                <h1 className="address-container">Address:<br/><span className="address">No-105, 16 Samaksuppakarn Rd, Tambon Mae Sot, Mae Sot District, Tak 63110</span></h1>
                <button className="google-map-btn"><a className="google-map-link" href="https://www.google.com/maps/place/Hta+Naung+Yeik/@16.71388,98.58937,834m/data=!3m1!1e3!4m6!3m5!1s0x30dd994acb048c41:0xe266b29db0592848!8m2!3d16.71388!4d98.58937!16s%2Fg%2F11tws0slqb!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">View on Google Map</a></button>
            </div>
        </div>
    )
}

export default Location