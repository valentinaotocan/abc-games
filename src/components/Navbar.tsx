import logo from '../assets/logo.svg';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import { BiSolidJoystick, BiJoystick } from "react-icons/bi";

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