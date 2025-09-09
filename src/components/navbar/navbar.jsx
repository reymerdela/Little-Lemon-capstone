import { NavLink } from "react-router";
import styles from "./navbar.module.css";
import logo from "@/assets/logo.svg";
const Navbar = () => {
  return (
    <nav className={`container-padding ${styles.navbar} flex font-karla`}>
      <div className={styles.logo}>
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <div>
        <ul className={`${styles.navList} flex`}>
          <NavLink to={"/"}>Home</NavLink>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
