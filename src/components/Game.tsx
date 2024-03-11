import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import Spinner from "./Spinner";

function Game() {
  const { data, isLoading, error } = useGames();

  return (
    <>
      {error && <>Error 404</>}
      {isLoading ? (<Spinner />) : (
        <>
          {data.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </>
      )}
    </>
  );
}

export default Game;
