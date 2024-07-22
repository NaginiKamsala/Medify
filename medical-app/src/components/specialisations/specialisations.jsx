import styles from "./specialisations.module.css";

import XRay from "../../assets/X-Ray.png";
import DrugStore from "../../assets/Drugstore (1).png";
import Immune from "../../assets/Immune.png";
import BloodSample from "../../assets/Blood Sample.png";
import HeartRate from "../../assets/Heart Rate.png";
import HeartRateMonitor from "../../assets/Heart Rate Monitor.png";
import Stethoscope from "../../assets/Stethoscope.png";
import { Button } from "@mui/material";

const CategoryCard = ({ Icon, title }) => {
  return (
    <div className={styles.card} onClick={() => {}}>
      <img src={Icon} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};
const Specialisations = () => {
  return (
    <div className={styles.specialisationDiv}>
      <h2>Find by specialisation</h2>
      <div className={styles.categories}>
        <CategoryCard Icon={DrugStore} title="Dentistry" />
        <CategoryCard Icon={Stethoscope} title="Primary Care" />
        <CategoryCard Icon={HeartRate} title="Cardiology" />
        <CategoryCard Icon={HeartRateMonitor} title="MRI Resonance" />
        <CategoryCard Icon={BloodSample} title="Blood Test" />
        <CategoryCard Icon={Immune} title="Piscologist" />
        <CategoryCard Icon={DrugStore} title="Laboratory" />
        <CategoryCard Icon={XRay} title="X-Ray" />
      </div>
      <Button
        className={styles.button_mui}
        variant="contained"
        sx={{
          background: "var(--color-blue-secondary)",
          textTransform: "none",
          padding: "6px 24px",
        }}
      >
        View All
      </Button>
    </div>
  );
};

export default Specialisations;
