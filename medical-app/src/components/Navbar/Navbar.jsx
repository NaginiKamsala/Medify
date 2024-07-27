import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@mui/material";

const Navbar = () => {
  const NavButton = ({ content }) => {
    return <button className={styles.btn}>{content}</button>;
  };

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  function handleMyBookingClick() {
    navigate("/bookings");
  }

  return (
    <div>
      <div className={styles.mainheading}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <div
        className={`${styles.nav} ${
          path === "/" ? "" : styles.navbar_div_result_page
        }`}
      >
        <button
          onClick={() => navigate("/")}
          style={{ border: "none", cursor: "pointer" }}
        >
          <div className={styles.logo}>
            <img src={logo} alt="medify logo" />
            <span>Medify</span>
          </div>
        </button>
        <div className={styles.navlinks}>
          <NavButton content="Find Doctors"></NavButton>
          <NavButton content="Hospitals"></NavButton>
          <NavButton content="Medicines"></NavButton>
          <NavButton content="Surgeries"></NavButton>
          <NavButton content="Software for Provider"></NavButton>
          <NavButton content="Facilities"></NavButton>
          <Button
            variant="contained"
            sx={{
              background: "var(--color-blue-secondary)",
              textTransform: "none",
            }}
            onClick={handleMyBookingClick}
          >
            My Bookings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
