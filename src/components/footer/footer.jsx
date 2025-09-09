import styles from "./footer.module.css";
import logo from "@/assets/LogoB.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`container-padding font-karla ${styles.footer}`}>
      <div className={styles.footerTop}>
        <div className={` ${styles.container}`}>
          <div>
            <img src={logo} alt="Little Lemon Logo" />
          </div>
          <nav className={styles.nav}>
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
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
          </nav>
          <div className={styles.contact}>
            <h3>Contact Us</h3>
            <p>123 Lemon Street, Miami, FL 33101</p>
            <p>+1 (305) 123-4567</p>
            <p>contact@littlelemon.com</p>
            <p>Mon - Sun: 10:00 AM - 10:00 PM</p>
          </div>
          <div className={styles.socials}>
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
