import { NavLink } from "react-router-dom";
import { Logo, Menu } from "../assets";

const Navbar = ({ setShowMenu, setBg }) => (
  <nav className="navbar">
    <div className="logo">
      <Logo />
    </div>
    <ul className="pages h16">
      <li onClick={() => setBg("home")}>
        <NavLink to="/">
          <span>00</span> home
        </NavLink>
      </li>
      <li onClick={() => setBg("destination")}>
        <NavLink to="/destination">
          <span>01</span> destination
        </NavLink>
      </li>
      <li onClick={() => setBg("crew")}>
        <NavLink to="/crew">
          <span>02</span> crew
        </NavLink>
      </li>
      <li onClick={() => setBg("technology")}>
        <NavLink to="/technology">
          <span>03</span> technology
        </NavLink>
      </li>
    </ul>
    <div className="menu" onClick={() => setShowMenu(true)}>
      <Menu />
    </div>
  </nav>
);

export default Navbar;
