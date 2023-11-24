import { useContext } from "react";
import { ThemeContext } from "./contexts/theme-context";
import Navbar from "./components/Navbar";
import Game from "./components/Game";

function App() {
  const { theme } = useContext(ThemeContext);
  const containerClassName = theme === "light" ? "light" : "dark";

  return (
    <div className={`${containerClassName} background p-2`}>
      <Navbar />
      <div className="text pt-1">
       <Game />
      </div>
    </div>
  );
}

export default App;
