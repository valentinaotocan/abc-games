export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface GenreProps {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}

export interface GameProps {
  selectedGenre: Genre | null;
}
