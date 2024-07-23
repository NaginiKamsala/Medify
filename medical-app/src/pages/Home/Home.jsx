import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchHeroSection from "../../components/SearchHeroSection/SearchHeroSection";
import Advertisement from "../../components/Advertisement/Advertisement";
import Specialisations from "../../components/specialisations/specialisations";
import MedicalSpecialists from "../../components/MedicalSpecilists/MedicalSpecialists";
import DoctorInteraction from "../../components/DoctorInteraction/DoctorInteraction";
import BlogandNews from "../../components/BlogandNews/BlogandNews";
import FamilyCare from "../../components/FamilyCare/FamilyCare";
import FAQS from "../../components/FAQS/FAQs";
import MedifyApp from "../../components/MedifyApp/MedifyApp";
import Footer from "../../components/Footer/Footer";

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
      <FAQS />
      <MedifyApp />
      <Footer />
    </div>
  );
};

export default Home;
