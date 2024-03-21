import { useState, useContext } from "react";
import { ThemeContext } from "./contexts/theme-context";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import GenreList from "./components/GenreList";
import { Genre } from "./interfaces";

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const { theme } = useContext(ThemeContext);
  const containerClassName = theme === "light" ? "light" : "dark";

  return (
    <div className={`${containerClassName} min-h-screen background p-2 app`}>
      <Navbar />
      <div className="text-clr app__main d-flex pt-2">
        <div className="app__main__genre-list d-flex fd-column gap-1">
          <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </div>
        <div className="app__main__game d-grid gap-2">
          <Game selectedGenre={selectedGenre} />
        </div>
      </div>
    </div>
  );
}

export default App;
