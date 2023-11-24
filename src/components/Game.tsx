import useFetch from "../hooks/useFetch";

function Game() {
  const { games, error } = useFetch();

  return (
    <div>
      {error ? (
        <div>Error 404</div>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Game;
