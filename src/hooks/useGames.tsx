import { Game } from "../interfaces";
import useData from "./useData";


function useGames() {
  return useData<Game>('/games');
}

export default useGames;
