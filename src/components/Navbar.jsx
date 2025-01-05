import './Navbar.css';
import { useTheme } from "../ThemeProvider"

function Navbar() {

    const {toggleTheme} = useTheme()

    return (
      <div className='navbar'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/contact-us'>About</a></li>
          <li><a href='/about-us'>Contact</a></li>
          <li><a href='/products'>Products</a></li>
        </ul>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    )
  }
  
  export default Navbar
  