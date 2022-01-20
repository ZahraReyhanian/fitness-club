import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import HeroSection from "../components/sections/HeroSection";
import ExerciseSection from "../components/sections/ExerciseSection";
import InfoSection from "../components/sections/InfoSection";
import { infoData } from "../components/data/infoData";
import Footer from "../components/footer/Footer";
import { getHome } from "../api/api_home";
import EquipmentSection from "../components/sections/EquipmentSection";
import { getAxiosInstanceApi } from "../api/api";

function Home() {
  const [home, setHome] = useState([]);

  useEffect(async () => {
    await getAxiosInstanceApi()
      .get("?api_token=" + localStorage.getItem("x-auth-token"))
      .then((response) => {
        const data = response.data;
        localStorage.setItem(
          "image",
          "http://localhost:8000/" + data.data.user.student[0].image
        );
        setHome(data.data);
        console.log(home);
      })
      .catch((error) => {
        console.log(error);
        alert("alert: " + error.message);
      });
  }, []);

  if (!home.gym) return "loading data ...";
  else console.log(home);
  return (
    <Layout>
      <HeroSection data={home.gym} />
      <ExerciseSection />
      <InfoSection {...infoData} />
      <EquipmentSection />
      <Footer />
    </Layout>
  );
}

export default Home;
