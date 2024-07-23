import styles from "./FamilyCare.module.css";
import DrugStore from "../../assets/Drugstore (1).png";
import happy_icon from "../../assets/happy_icon.png";
import hospital_icon from "../../assets/hospital_icon.png";
import doctor_icon from "../../assets/doctor_icon.png";
import lab_icon from "../../assets/lab_icon.png";

const CategoryCard = ({ Icon, title, count, color }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage} style={{ backgroundColor: color }}>
        <img src={Icon} alt={title} />
      </div>

      <h1>{count}</h1>
      <h4>{title}</h4>
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
            Icon={happy_icon}
            count="5000+"
            title="Happy patients"
            color="#EBF7FF"
          />
          <CategoryCard
            Icon={hospital_icon}
            count="200+"
            title="Hospitals"
            color="#FFF2F0"
          />
        </div>
        <div>
          <CategoryCard
            Icon={lab_icon}
            count="1000+"
            title="Laboratories"
            color="#FFF7E6"
          />
          <CategoryCard
            Icon={doctor_icon}
            count="700+"
            title="Expert Doctors"
            color="#EBFAF1"
          />
        </div>
      </div>
    </div>
  );
};

export default FamilyCare;
