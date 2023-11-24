import useFetch from "../hooks/useFetch";
import GameCard from "./GameCard";

function Game() {
  const { games, error } = useFetch();

  return (
    <div>
      {error ? (
        <div>Error 404</div>
      ) : (
        <ul>
          {games.map((game) => (
            <GameCard key={game.id} game={game}/>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Game;
