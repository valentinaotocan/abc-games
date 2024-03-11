import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data } = useGenres();
  return (
    <>
      {data.map((genre) => (
        <div className="genre-list d-flex ai-center">
          <img src={getCroppedImageUrl(genre.image_background)} alt={genre.name} className="genre-list__img mr-1"/>
          <p key={genre.id}>{genre.name}</p>
        </div>
      ))}
    </>
  );
}
export default GenreList;
