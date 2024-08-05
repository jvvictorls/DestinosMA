import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

type MapProps = {
  lat: number;
  lng: number;
};

function Map({ lat, lng }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCD0AN71KJxlxZRi30prcsXKbmGP0NV37s',
  });
  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            height: '400px',
            width: '100%',
            margin: '50px 0',
          }}
          center={{ lat: lat, lng: lng }}
          zoom={12}
        >
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Map;
