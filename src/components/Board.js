import Card from './Card';
import '../styles/Board.css';

import tempCard from '../img/TTAbaddon.png';

const Board = () => {
  return (
    <div className="game-board">
      <div className="p1-cards">&nbsp;</div>
      <div className="play-container">
        <Card frontSrc={tempCard} cardNum={1} />
        <div className="card card2">2</div>
        <div className="card card3">3</div>
        <div className="card card4">4</div>
        <div className="card card5">5</div>
        <div className="card card6">6</div>
        <div className="card card7">7</div>
        <div className="card card8">8</div>
        <div className="card card9">9</div>
      </div>
      <div className="p2-cards">&nbsp;</div>
    </div>
  );
};

export default Board;
