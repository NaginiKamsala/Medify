import styles from "./MedicalSpecialists.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Doctor1 from "../../assets/doctor1.png";
import Doctor2 from "../../assets/doctor2.png";
import Doctor3 from "../../assets/doctor3.png";
import Doctor4 from "../../assets/Doctor4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const DoctorCard = ({ image, name, specialisation }) => {
  return (
    <div className={styles.doctorcard}>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{specialisation}</p>
    </div>
  );
};

const MedicalSpecialists = () => {
  const doctorList = [
    {
      image: Doctor1,
      name: "Dr. Ahmad Khan",
      specialisation: "Neurologist",
    },
    {
      image: Doctor2,
      name: "Dr. Heena Sachdeva",
      specialisation: "Orthopadics",
    },
    {
      image: Doctor3,
      name: "Dr. Ankur Sharma",
      specialisation: "Medicine",
    },
    {
      image: Doctor4,
      name: "Dr. Ashu Rokade",
      specialisation: "Orthopadics",
    },
    {
      image: Doctor3,
      name: "Dr. Runan Wajal",
      specialisation: "Neurologist",
    },
  ];
  return (
    <div>
      <h2>Our Medical Specialist</h2>
      <div className={styles.ads_section}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {doctorList.map((dr, ind) => {
            return (
              <SwiperSlide key={ind}>
                <DoctorCard
                  image={dr.image}
                  name={dr.name}
                  specialisation={dr.specialisation}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MedicalSpecialists;
