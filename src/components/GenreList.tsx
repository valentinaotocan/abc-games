import useGenres from "../hooks/useGenres";
import { GenreProps } from "../interfaces";
import getCroppedImageUrl from "../services/image-url";

function GenreList({onSelectedGenre}: GenreProps) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  
  if (isLoading) return null;

  return (
    <>
      {data.map((genre) => (
        <div key={genre.id} className="genre-list d-flex ai-center">
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            className="genre-list__img mr-1"
          />
          <p className="genre-list__name" onClick={() => onSelectedGenre(genre)}>{genre.name}</p>
        </div>
      ))}
    </>
  );
}
export default GenreList;
