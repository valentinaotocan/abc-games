import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function Game() {
  const { games, isLoading, error } = useFetch();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 896);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 896);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {error && <>Error 404</>}
      {isLoading ? (
        <>
          {isLargeScreen
            ? [1, 2, 3, 4, 5, 6].map((n) => <GameCardSkeleton key={n} />)
            : [1, 2, 3].map((n) => <GameCardSkeleton key={n} />)}
        </>
      ) : (
        <>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </>
      )}
    </>
  );
}

export default Game;
