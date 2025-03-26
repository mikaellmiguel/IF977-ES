import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapWrapper, LinkWrapper, StyledLink } from './style';

export function OSMMap({ osmUrl }) {
  const osmRelationId = osmUrl ? osmUrl.split('/').pop() : null;
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch(`https://overpass-api.de/api/interpreter?data=[out:json];relation(${osmRelationId});out geom;`)
      .then((response) => response.json())
      .then((data) => {
        if (data.elements) {
          const geojson = {
            type: 'FeatureCollection',
            features: data.elements
              .filter((el) => el.type === 'relation' || el.type === 'way')
              .map((el) => ({
                type: 'Feature',
                geometry: {
                  type: el.type === 'way' ? 'LineString' : 'Polygon',
                  coordinates: el.geometry ? el.geometry.map((g) => [g.lon, g.lat]) : [],
                },
                properties: {},
              })),
          };
          setGeojsonData(geojson);
        }
      });
  }, [osmRelationId]);

  return (
    <>
      <MapWrapper>
        <MapContainer center={[48.8566, 2.3522]} zoom={10} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {geojsonData && <GeoJSON data={geojsonData} />}
        </MapContainer>
      </MapWrapper>
      <LinkWrapper>
        <StyledLink href={osmUrl} target="_blank" rel="noopener noreferrer">
          Ver no OpenStreetMap
        </StyledLink>
      </LinkWrapper>
    </>
  );
}
