import './Navbar.css';

function Navbar() {

    return (
      <div className='navbar'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/contact-us'>About</a></li>
          <li><a href='/about-us'>Contact</a></li>
          <li><a href='/products'>Products</a></li>
        </ul>
      </div>
    )
  }
  
  export default Navbar
  