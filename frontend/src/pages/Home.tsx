import Thumb from '../components/Thumb';
import '../styles/home.css';
import { useState } from 'react';
type DestinationType = {
  key: string;
  type: string;
  image: string;
};

function Home() {
  const destinations: DestinationType[] = [
    {
      key: '1',
      type: 'Praia',
      image:
        'https://images.pexels.com/photos/3816807/pexels-photo-3816807.jpeg',
    },
    {
      key: '2',
      type: 'Cultural',
      image:
        'https://images.pexels.com/photos/5273637/pexels-photo-5273637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      key: '3',
      type: 'Natureza',
      image:
        'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
    },
  ];
  const [search, setSearch] = useState('');
  const destinationsFiltered = destinations.filter((destination) =>
    destination.type.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="home-container">
      <div className="home-content">
        <div>
          <h1>Escolha o seu tipo de destino ✈️</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            name="search"
            id="search"
          />
        </div>
        <div className="thumbs">
          {destinationsFiltered
            ? destinationsFiltered.map((destination) => (
                <Thumb
                  key={destination.key}
                  src={destination.image}
                  text={destination.type}
                  filter={destination.type}
                />
              ))
            : destinations.map((destination) => (
                <Thumb
                  key={destination.key}
                  src={destination.image}
                  text={destination.type}
                  filter={destination.type}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
