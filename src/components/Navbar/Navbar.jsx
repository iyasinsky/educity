import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="container">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Program</a>
        </li>
        <li>
          <a>About us</a>
        </li>
        <li>
          <a>Campus</a>
        </li>
        <li>
          <a>Testimonials</a>
        </li>
        <li>
          <a className="contact-us-btn">Contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
