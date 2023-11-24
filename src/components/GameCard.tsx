import { Game } from '../interfaces';
import { BsFillSuitHeartFill } from "react-icons/bs";

interface Props {
  game: Game
}

function GameCard({game}: Props) {
  return (
    <div className="card">
      <img src={game.background_image} alt="" />
      <div className="p-1">
        <h2>{game.name}</h2>
        <div className="rating d-flex">
          <BsFillSuitHeartFill />
          <p>{game.rating}</p>
        </div>
      </div>
    </div>
  );
}
export default GameCard