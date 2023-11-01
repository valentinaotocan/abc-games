import logo from '../assets/logo.svg';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <button
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle {theme === "light" ? "dark" : "light"}
      </button>
    </nav>
  );
}
export default Navbar