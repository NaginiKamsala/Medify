import { useLocation } from "react-router";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchheroSection.module.css";
import Ambulance from "../../assets/Ambulance.png";
import Capsule from "../../assets/Capsule.png";
import Doctor from "../../assets/Doctor.png";
import Hospital from "../../assets/Hospital.png";
import DrugStore from "../../assets/Drugstorelabs.png";
import CategoryCard from "../CategoryCard/CategoryCard";

const SearchHeroSection = () => {
  const location = useLocation();
  return (
    <div
      className={`${styles.search_section} ${styles.search_section_postion_home}`}
    >
      <div className={styles.searchbars_button}>
        <div className={styles.searchbar_div}>
          <SearchIcon />
          <input className={styles.searchbar} type="text" placeholder="State" />
        </div>
        <div className={styles.searchbar_div}>
          <SearchIcon />
          <input className={styles.searchbar} type="text" placeholder="City" />
        </div>
        <Button
          className={styles.button_mui}
          variant="contained"
          startIcon={<SearchIcon />}
          sx={{
            background: "var(--color-blue-secondary)",
            textTransform: "none",
          }}
        >
          Search
        </Button>
      </div>
      {location.pathname === "/" && (
        <div className={styles.cards_container}>
          <div className={styles.heading}>You may be looking for</div>
          <div className={styles.cards_wrapper}>
            <CategoryCard Icon={Doctor} title="Doctors" />
            <CategoryCard Icon={DrugStore} title="Labs" />
            <CategoryCard Icon={Hospital} title="Hospitals" />
            <CategoryCard Icon={Capsule} title="Medical Store" />
            <CategoryCard Icon={Ambulance} title="Ambulance" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchHeroSection;
