import { Game } from '../interfaces';
import { BsFillSuitHeartFill } from "react-icons/bs";

interface Props {
  game: Game
}

function GameCard({game}: Props) {
  return (
    <div>
      <img src={game.background_image} alt="" />
      <h2>{game.name}</h2>
      <p>
        <BsFillSuitHeartFill />
        {game.rating}
      </p>
    </div>
  );
}
export default GameCard