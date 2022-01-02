import React from "react";
import Layout from "../components/layout/layout";
import HeroSection from "../components/sections/HeroSection";
import ExerciseSection from "../components/sections/ExerciseSection";
import InfoSection from "../components/sections/InfoSection";
import { infoData } from "../components/data/infoData";
import Footer from "../components/footer/Footer";
import ServiceSection from "../components/sections/ServiceSection";

function Home() {
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
