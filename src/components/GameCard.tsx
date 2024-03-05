import { Game } from '../interfaces';
import { BsFillSuitHeartFill } from "react-icons/bs";

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  let iconColor;
  if (game.rating >= 4) {
    iconColor = "#ff0000";
  } else if (game.rating >= 3) {
    iconColor = "#ff00006b";
  } else {
    iconColor = "#ff000029";
  }

  return (
    <div className="card">
      <img src={game.background_image} alt="Image" />
      <div className="p-1">
        <h2>{game.name}</h2>
        <div className="rating d-flex">
          <BsFillSuitHeartFill style={{ color: iconColor }} />
          <p>{game.rating}</p>
        </div>
      </div>
    </div>
  );
}
export default GameCard