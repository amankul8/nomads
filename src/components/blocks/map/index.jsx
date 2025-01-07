import styles from "./TourMap.module.css";
import "leaflet/dist/leaflet.css";
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';

const { MapContainer, TileLayer, Marker, Popup, Polyline, Circle} = ReactLeaflet;

const Map = () => {

    const center = [51.505, -0.09]
    const limeOptions = { color: 'lime' }
    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
    ]

    const customIcon = new Leaflet.Icon({
        iconUrl: "https://cdn3.iconfinder.com/data/icons/map-navigation-8/512/location-pin-coordinate-point-512.png",
        iconSize: [40, 40]
    })

    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} className={styles.map}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={center} icon={customIcon}>
                <Popup>
                    <div>
                        dfgbsgbs sdfvdfvds sdf
                    </div>
                </Popup>
            </Marker>
            <Polyline pathOptions={limeOptions} positions={polyline} />
            <Circle center={center} pathOptions={{fillColor: 'blue' }} radius={200} />
        </MapContainer>
    );
}

export default Map;