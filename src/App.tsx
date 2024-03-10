import { useContext } from "react";
import { ThemeContext } from "./contexts/theme-context";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import GenreList from "./components/GenreList";

function App() {
  const { theme } = useContext(ThemeContext);
  const containerClassName = theme === "light" ? "light" : "dark";

  return (
    <div className={`${containerClassName} min-h-screen background p-2`}>
      <Navbar />
      <div className="text-clr">
        <GenreList />
      </div>
      <div
        className="text-clr d-flex fw-wrap jc-center pt-2"
        style={{ gap: "2rem" }}
      >
        <Game />
      </div>
    </div>
  );
}

export default App;
