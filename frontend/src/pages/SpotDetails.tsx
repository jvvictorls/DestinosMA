import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ISpot from '../interfaces/ISpot';
import { getSpotById } from '../service/requests';
import '../styles/spotDetails.css';
import Map from '../components/Map';

function SpotDetails() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ISpot | null>({} as ISpot | null);
  console.log(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return navigate('/spots');
    getSpotById(id).then((spot) => setData(spot));
  }, [id, navigate]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="spot-details">
      <img src={data.image} alt={data.name} />
      <div className="spot-content">
        <div className="text-content">
          <div className="spot-title">
            <h2>{data.name}</h2>
          </div>
          <div className="description">
            <p>{data.description}</p>
          </div>
          <Map lat={data.latitude} lng={data.longitude} />
        </div>
      </div>
    </div>
  );
}

export default SpotDetails;
