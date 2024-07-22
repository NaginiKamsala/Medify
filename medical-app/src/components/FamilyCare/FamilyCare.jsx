import styles from "./FamilyCare.module.css";
import DrugStore from "../../assets/Drugstore (1).png";

const CategoryCard = ({ Icon, title, count, color }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage} style={{ backgroundColor: color }}>
        <img src={Icon} alt={title} />
      </div>

      <h4>{count}</h4>
      <h6>{title}</h6>
    </div>
  );
};

const FamilyCare = () => {
  return (
    <div className={styles.FamilySection}>
      <div className={styles.caring}>
        <h4>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h4>
        <h1>Our Families</h1>
        <p className={styles.content}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className={styles.cards}>
        <div>
          <CategoryCard
            Icon={DrugStore}
            count="5000+"
            title="Laboratories"
            color="#EBF7FF"
          />
          <CategoryCard
            Icon={DrugStore}
            count="5000+"
            title="Laboratories"
            color="#FFF2F0"
          />
        </div>
        <CategoryCard
          Icon={DrugStore}
          count="5000+"
          title="Laboratories"
          color="#FFF7E6"
        />
        <CategoryCard
          Icon={DrugStore}
          count="5000+"
          title="Laboratories"
          color="#EBFAF1"
        />
      </div>
    </div>
  );
};

export default FamilyCare;
