import styles from "./card.module.css";

const Card = ({ product }) => {
  const { title, description, price, imageUrl } = product;
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} />
      <div className={styles.content}>
        <p className={styles.title}>
          {title} <span>{price}</span>
        </p>
        <p className={styles.description}>{description}</p>
        <a className={`font-karla ${styles.button}`} href="#">
          Order a delivery
        </a>
      </div>
    </div>
  );
};

export default Card;
