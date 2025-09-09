import { NavLink } from "react-router";
import Button from "../button/button";
import styles from "./hero.module.css";
import heroImage from "@/assets/restauranfood.jpg";

const Hero = () => {
  return (
    <div className={`container-padding ${styles.hero}`}>
      <div className={`${styles.heroContent}`}>
        <img src={heroImage} className={styles.image} alt="" />
        <div className="font-markazi">
          <h2>Little Lemon</h2>
          <p>Chicago</p>
        </div>
        <p className="font-karla">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis
          cum ipsam modi porro soluta autem nostrum est totam, quibusdam quasi
          error nihil sequi dolorem inventore blanditiis? Maiores, accusantium
          dolor?
        </p>
        <NavLink to="/booking">
          <Button>Reserve a Table</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
