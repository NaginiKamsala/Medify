import styles from "./FAQs.module.css";

import doctor_patient from "../../assets/FAQ.png";
import { ReactComponent as HeartIcon } from "../../assets/FAQ_heart.svg";
import { ReactComponent as SmileIcon } from "../../assets/FAQ_smile.svg";
import { ReactComponent as PlusIcon } from "../../assets/FAQ_plus_icon.svg";

const FAQS = () => {
  return (
    <div classname={styles.mainsection}>
      <h4>Get your answers</h4>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.content}>
        <div className={styles.doctorpatientimage}>
          <div className={styles.image}>
            <img src={doctor_patient} alt="doctor patient image" />
          </div>
          <div className={styles.SmileIcon}>
            <SmileIcon />
            <div>
              <h3>84k+</h3>
              <p>Happy Patients</p>
            </div>
          </div>
          <div className={styles.HeartIcon}>
            <HeartIcon />
          </div>
        </div>
        <div className={styles.question_section}>
          <div className={styles.question}>
            <p>Why choose our medical for your family?</p>
            <div className={styles.question_svg}>
              <PlusIcon />
            </div>
          </div>
          <div className={styles.question}>
            <p>Why we are different from others?</p>
            <div className={styles.question_svg}>
              <PlusIcon />
            </div>
          </div>
          <div className={styles.question}>
            <p>Trusted & experience senior care & love</p>
            <div className={styles.question_svg}>
              <PlusIcon />
            </div>
          </div>
          <div className={styles.question}>
            <p>How to get appointment for emergency cases?</p>
            <div className={styles.question_svg}>
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
