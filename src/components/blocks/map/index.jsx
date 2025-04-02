import styles from "./TourMap.module.css";
import "leaflet/dist/leaflet.css";
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';

const { MapContainer, TileLayer, Marker, Popup } = ReactLeaflet;

const Map = ({ coordinates }) => {

    const customIcon = new Leaflet.Icon({
        iconUrl: "https://cdn3.iconfinder.com/data/icons/map-navigation-8/512/location-pin-coordinate-point-512.png",
        iconSize: [40, 40],
    });

    // Если нет координат, можно использовать дефолтные значения
    const defaultCenter = coordinates.length === 2 ? coordinates : [51.505, -0.09];

    return (
        <MapContainer center={defaultCenter} zoom={8} scrollWheelZoom={false} className={styles.map}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={defaultCenter} icon={customIcon}>
                <Popup>
                    <div>
                        Coordinates: {defaultCenter[0]}, {defaultCenter[1]}
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
