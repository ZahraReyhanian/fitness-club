import React from "react"
import Layout from "../components/layout/layout"
import HeroSection from "../components/sections/HeroSection"
import ExerciseSection from "../components/sections/ExerciseSection"

function Home() {
  return (
    <Layout>
      <HeroSection />
      <ExerciseSection />
    </Layout>
  )
}

export default Home
