import { Genre } from "../interfaces";
import useData from "./useData";

// const useGenres = () => useData<Genre>("/genres");
function useGenres() {
  return useData<Genre>("/genres");
}

export default useGenres;
