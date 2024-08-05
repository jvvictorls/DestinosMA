import '../styles/thumb.css';
import { useNavigate } from 'react-router-dom';
type ThumbProps = {
  src: string;
  text: string;
  filter?: string;
};

function Thumb(props: ThumbProps) {
  const navigate = useNavigate();
  return (
    <div
      className="thumb-container"
      onClick={() => navigate('/spots', { state: { filter: props.text } })}
    >
      <div className="thumb-image">
        <img src={props.src} alt={props.text} />
      </div>
      <h1>{props.text}</h1>
    </div>
  );
}

export default Thumb;
