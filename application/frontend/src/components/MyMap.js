import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import config from '../config.js';

const MyMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.googleAPI,
  });

  // Google Map
  const center = {
    lat: 37.72377664594963,
    lng: -122.47965529711159,
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: '270px', width: '350px' }}
      zoom={17}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      <Marker position={{ lat: 37.72377664594963, lng: -122.47965529711159 }} />
    </GoogleMap>
  ) : (
    <></>
  );
}; //end of MyMap function

export default MyMap;
