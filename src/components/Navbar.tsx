import logo from '../assets/logo.svg';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import { BiSolidJoystick, BiJoystick } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
        <h1 className='text'>Games</h1>
      </Link>
      <button
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <BiSolidJoystick size="1.5rem" />
        ) : (
          <BiJoystick size="1.5rem" />
        )}
      </button>
    </nav>
  );
}
export default Navbar