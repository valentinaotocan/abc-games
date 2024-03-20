import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import Spinner from "./Spinner";
import { GameProps } from "../interfaces";

function Game({selectedGenre}: GameProps) {
  const { data, isLoading, error } = useGames(selectedGenre);

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
