import Navbar from "./components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme-context";

function App() {
  const { theme } = useContext(ThemeContext);
  const containerClassName = theme === "light" ? "light" : "dark";

  return (
    <div className={`${containerClassName} background p-2`}>
      <Navbar />
      <div className="text pt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tempora obcaecati distinctio repudiandae soluta deleniti accusantium
        minima ratione reprehenderit. Eos error laboriosam reprehenderit quis,
        ea commodi recusandae atque optio, animi saepe facilis ex accusamus
        aliquid molestiae harum nam reiciendis impedit possimus voluptate quam
        odio esse quod dolorem modi. Nam, odio.
      </div>
    </div>
  );
}

export default App;
