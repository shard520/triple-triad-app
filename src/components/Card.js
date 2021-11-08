import backSrc from '../img/card-back.jpeg';

import '../styles/Card.css';

const Card = ({ frontSrc, cardNum }) => {
  return (
    <div className={'card card' + cardNum}>
      <img className="card-front" alt="card front" src={frontSrc} />
      <img className="card-reverse" alt="card reverse" src={backSrc} />
    </div>
  );
};

export default Card;
