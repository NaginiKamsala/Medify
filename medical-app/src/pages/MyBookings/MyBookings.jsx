import { json, useLocation } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchHeroSection from "../../components/SearchHeroSection/SearchHeroSection";
import MedifyApp from "../../components/MedifyApp/MedifyApp";
import Footer from "../../components/Footer/Footer";
import SearchResultSection from "../../components/ResultSection/ResultSection";

const MyBookings = () => {
  const [bookingsList, setBookingsList] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem("bookingsList");
    if (list) {
      setBookingsList(JSON.parse(list));
    }
  }, []);
  return (
    <>
      {" "}
      <Navbar />
      <SearchHeroSection resultsList={bookingsList} />
      <SearchResultSection resultsList={bookingsList} />
      <MedifyApp />
      <Footer />
    </>
  );
};

export default MyBookings;
