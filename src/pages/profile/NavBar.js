import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      <Nav>
        <Profile>
          <img src="/images/profile.jpg" alt="" />
        </Profile>
        <NavItems>
          <NavItem>
            <NavLink to="/profile" exact activeClassName="active">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/setting" exact activeClassName="active">
              setting
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile_exercise" exact activeClassName="active">
              My Exercise
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" exact activeClassName="active">
              Return to home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signout" exact activeClassName="active">
              Sign out
            </NavLink>
          </NavItem>
        </NavItems>
        <NavFooter>
          <p>Your Profile Panel</p>
        </NavFooter>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

const Navbar = styled.div`
  height: 100vh;
  font-size: 1.2rem;
`;
const Profile = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  img {
    width: 70%;
    max-width: 150px;
    border-radius: 100%;
    border: 5px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }
`;
const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const NavItems = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;
const NavItem = styled.li`
  list-style: none;
  text-align: center;

  a {
    text-decoration: none;
    font-size: inherit;
    color: inherit;
    display: block;
    padding: 0.5rem 0;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0.4rem;
      height: 100%;
      background-color: #0381ff33;
      transform-origin: bottom;
      transform: scale(0);
      overflow-x: hidden;
      transition: transform 0.4s,
        0.2s width 0.2s cubic-bezier(1, -0.16, 0.6, 1.32);
    }
    &:hover::before {
      width: 100%;
      transform: scale(1);
    }
  }
  .active {
    background-color: #037fff;
  }
`;
const NavFooter = styled.footer`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  p {
    text-align: center;
    padding: 1rem 0;
  }
`;
