import Card from '../components/Card';
import { getSpots } from '../service/requests';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Spots() {
  const location = useLocation();
  const [spots, setSpots] = useState([]);
  const { filter } = location.state || {};
  useEffect(() => {
    getSpots().then((spots) => setSpots(spots));
  }, []);
  return (
    <div>
      {filter ? (
        <div>
          <h2>Spots</h2>
          <Card spot={spots} filter={location.state.filter} />
        </div>
      ) : (
        <div>
          <h2>Spots</h2>
          <Card spot={spots} />
        </div>
      )}
    </div>
  );
}

export default Spots;
