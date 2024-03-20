import { Game } from "../interfaces";
import { Genre } from "../interfaces";
import useData from "./useData";

function useGames(selectedGenre: Genre | null) {
  const params = new URLSearchParams();
  if (selectedGenre) {
    params.append("genres", selectedGenre.id.toString());
  }
  return useData<Game>("/games", params, [selectedGenre?.id]);
}

export default useGames;
