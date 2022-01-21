import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { themes } from "../../components/styles/ColorStyles";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import Setting from "./Setting";
import ProfileExercise from "./ProfileExercise";
import { getUserPanel } from "../../api/api_home";

const ProfilePanel = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [image, setImage] = useState("/images/person.png");

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  const [user, setUser] = useState([]);
  const [student, setStudent] = useState([]);
  const [BMI, setBMI] = useState();
  const [progress, setProgress] = useState();

  useEffect(() => {
    getUserPanel((isOk, data) => {
      if (!isOk) return alert(data.message);
      else {
        setUser(data.user);
        setStudent(data.user.student[0]);
        setBMI(data.BMI);
        setProgress(data.progress * 100);
        console.log(student.image);
        setImage(student.image);
      }
      console.log(user);
      console.log(student);
    });
  }, []);

  if (!user || !student) return "loading data...";
  else
    return (
      <PanelContainer>
        <Sidebar className={` ${navToggle ? "nav-toggle" : ""}`}>
          <NavBar image={student.image} />
        </Sidebar>
        <NavBtn onClick={navClick}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </NavBtn>
        <MainContent>
          <MainContentWrapper>
            <Switch>
              <Route path="/profile">
                <Dashboard
                  user={user}
                  student={student}
                  BMI={BMI}
                  progress={progress}
                />
              </Route>
              <Route path="/setting">
                <Setting />
              </Route>
              <Route path="/profile_exercise">
                <ProfileExercise />
              </Route>
            </Switch>
          </MainContentWrapper>
        </MainContent>
      </PanelContainer>
    );
};

export default ProfilePanel;

const PanelContainer = styled.div`
  overflow: hidden;
  .nav-toggle {
    transform: translateX(0);
  }
`;
const Sidebar = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);

  width: 16%;
  height: 100vh;
  background: #fff;
  position: fixed;
  z-index: 11;

  transform-origin: left;
  @media screen and (max-width: 1000px) {
    transform: translateX(-100%);
    transition: all 0.4s ease-in-out;
    width: 30%;
  }

  @media screen and (max-width: 576px) {
    width: 50%;
  }
`;
const MainContent = styled.div`
  width: 84%;
  margin-left: 16%;
  min-height: 100vh;
  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
  background-color: ${themes.light.backgroundColor};
  display: grid;
  position: relative;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
    width: 100%;
  }
`;

const MainContentWrapper = styled.div`
  margin: 2rem 7rem;
  @media (max-width: 576px) {
    margin: 2rem;
  }
`;

const NavBtn = styled.div`
  position: absolute;
  z-index: 10;
  right: 10%;
  top: 5%;
  width: 4rem;
  height: 4rem;
  display: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .line-1,
  .line-2,
  .line-3 {
    height: 0.4rem;
    width: 100%;
    background-color: #3858cc;
    pointer-events: none;
    display: none;
    border-radius: 20px;
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 1000px) {
    display: block;
    .line-1,
    .line-2,
    .line-3 {
      display: block;
    }
  }
`;
