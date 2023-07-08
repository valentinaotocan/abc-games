import logo from '../assets/logo.svg';
function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt="Logo"/>
      </div>
    </nav>
  )
}
export default Navbar