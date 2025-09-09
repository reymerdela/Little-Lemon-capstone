import styles from "./about.module.css";
import marioA from "@/assets/Mario and Adrian A.jpg";
import marioB from "@/assets/restaurant.jpg";
const About = () => {
  return (
    <div className={`container-padding ${styles.about} `}>
      <div className={styles.textContainer}>
        <div className={`font-markazi ${styles.title}`}>
          <h2>Little Lemon</h2>
          <p>Chicago</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa numquam
          quaerat ducimus magni voluptatibus saepe, obcaecati corrupti, enim
          modi, animi nemo harum tempore suscipit nam ipsa officia nisi odit a.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ipsam,
          harum earum eos voluptate debitis adipisci officiis accusamus
          dignissimos, consequatur ab iste dolorum cumque similique! Animi
          corporis amet sit mollitia?
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={marioA} alt="Mario and Adrian A" />
        <img src={marioB} alt="Mario and Adrian B" />
      </div>
    </div>
  );
};

export default About;
