import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchHeroSection from "../../components/SearchHeroSection/SearchHeroSection";
import Advertisement from "../../components/Advertisement/Advertisement";
import Specialisations from "../../components/specialisations/specialisations";
import MedicalSpecialists from "../../components/MedicalSpecilists/MedicalSpecialists";
import DoctorInteraction from "../../components/DoctorInteraction/DoctorInteraction";
import BlogandNews from "../../components/BlogandNews/BlogandNews";
import FamilyCare from "../../components/FamilyCare/FamilyCare";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchHeroSection />
      <Advertisement />
      <Specialisations />
      <MedicalSpecialists />
      <DoctorInteraction />
      <BlogandNews />
      <FamilyCare />
    </div>
  );
};

export default Home;
