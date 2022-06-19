import { CloseIcon } from "../assets";
import { NavLink } from "react-router-dom";

const MobileNavbar = ({ setShowMenu, setBg, showMenu }) => (
  <nav className={`mobile-nav ${showMenu ? "show" : "leave"}`}>
    <div className="close" onClick={() => setShowMenu(false)}>
      <CloseIcon />
    </div>
    <ul className="pages h16 flex flex-column">
      <li style={{ "--i": "0.3s" }} onClick={() => setBg("home")}>
        <NavLink to="/">
          <span>00</span> home
        </NavLink>
      </li>
      <li style={{ "--i": "0.6s" }} onClick={() => setBg("destination")}>
        <NavLink to="/destination">
          <span>01</span> destination
        </NavLink>
      </li>
      <li style={{ "--i": "0.9s" }} onClick={() => setBg("crew")}>
        <NavLink to="/crew">
          <span>02</span> crew
        </NavLink>
      </li>
      <li style={{ "--i": "1.2s" }} onClick={() => setBg("technology")}>
        <NavLink to="/technology">
          <span>03</span> technology
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default MobileNavbar;
