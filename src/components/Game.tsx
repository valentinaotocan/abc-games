import useFetch from "../hooks/useFetch";
import GameCard from "./GameCard";

function Game() {
  const { games, error } = useFetch();

  return (
    <>
      {error ? (
        <div>Error 404</div>
      ) : (
        <>
          {games.map((game) => (
            <GameCard key={game.id} game={game}/>
          ))}
        </>
      )}
    </>
  );
}

export default Game;
