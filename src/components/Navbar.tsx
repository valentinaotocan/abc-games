import logo from '../assets/logo.svg';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import { BiSolidJoystick, BiJoystick } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="d-flex jc-space-between ai-center">
      <Link to="/" className="logo d-flex ai-center">
        <img src={logo} alt="Logo" />
        <h1 className="text">Games</h1>
      </Link>
      <button
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <BiSolidJoystick size="1.5rem" className="d-flex" />
        ) : (
          <BiJoystick size="1.5rem" className="d-flex" />
        )}
      </button>
    </nav>
  );
}
export default Navbar