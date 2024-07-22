import styles from "./CategoryCard.module.css";
const CategoryCard = ({ Icon, title }) => {
  return (
    <div className={styles.card} onClick={() => {}}>
      <img src={Icon} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default CategoryCard;
