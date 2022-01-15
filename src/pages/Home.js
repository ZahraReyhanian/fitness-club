import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import HeroSection from "../components/sections/HeroSection";
import ExerciseSection from "../components/sections/ExerciseSection";
import InfoSection from "../components/sections/InfoSection";
import { infoData } from "../components/data/infoData";
import Footer from "../components/footer/Footer";
import ServiceSection from "../components/sections/ServiceSection";
import { getHome } from "../api/api_home";

function Home() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    getHome((isOk, data) => {
      if (!isOk) return alert("alert: " + data.message);
      else setHome(data);
      console.log(data);
    });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ExerciseSection />
      <InfoSection {...infoData} />
      <ServiceSection />
      <Footer />
    </Layout>
  );
}

export default Home;
