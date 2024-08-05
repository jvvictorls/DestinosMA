import Card from '../components/Card';
import { getSpots } from '../service/requests';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/spots.css';

type userType = {
  name: string;
  email: string;
  password: string;
};

function Spots() {
  const location = useLocation();
  const navigate = useNavigate();
  const [spots, setSpots] = useState([]);
  const { filter } = location.state || {};
  useEffect(() => {
    getSpots().then((spots) => setSpots(spots));
  }, []);
  const user = JSON.parse(localStorage.getItem('user') || '{}') as userType;
  if (!user.name) return navigate('/login');
  return (
    <div className="spots-container">
      {filter ? (
        <div className="spots-content">
          <h2>Olá, {user?.name}</h2>
          <Card spot={spots} filter={location.state.filter} />
        </div>
      ) : (
        <div className="spots-content">
          <h2>Olá, {user?.name}</h2>
          <Card spot={spots} />
        </div>
      )}
    </div>
  );
}

export default Spots;
