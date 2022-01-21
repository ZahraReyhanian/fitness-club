import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import HeroSection from "../components/sections/HeroSection";
import ExerciseSection from "../components/sections/ExerciseSection";
import InfoSection from "../components/sections/InfoSection";
import { infoData } from "../components/data/infoData";
import { getHome } from "../api/api_home";
import EquipmentSection from "../components/sections/EquipmentSection";
import { getAxiosInstanceApi } from "../api/api";
import { toast } from "react-toastify";

function Home() {
  const [home, setHome] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [exercises, setExercises] = useState([]);

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
        setEquipments(home.sportEquipment);
        setExercises(home.studentExercise);
        console.log(home);
      })
      .catch((error) => {
        toast.error("Wait! Something happend :(");
        console.log(error);
        if (error.status == 401) {
          localStorage.clear();
          window.location.reload();
        }
      });
  }, []);

  if (!home.gym) return "loading data ...";
  else console.log(home);
  return (
    <Layout>
      <HeroSection data={home.gym} />
      <ExerciseSection data={exercises} />
      <InfoSection {...infoData} />
      <EquipmentSection data={equipments} />
    </Layout>
  );
}

export default Home;
