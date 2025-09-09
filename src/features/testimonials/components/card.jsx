import styles from "./card.module.css";
const Card = ({ name, feedback, image, rating }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.feedback}>{feedback}</p>
      <div className={styles.rating}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className={styles.star}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
