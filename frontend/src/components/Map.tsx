import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

type MapProps = {
  lat: number;
  lng: number;
};

function Map({ lat, lng }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
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
          center={{ lat, lng }}
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
