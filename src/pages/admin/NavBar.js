import React, { useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { toast } from "react-toastify";
import { uploadUserPhoto } from "../../api/api_auth";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import CallIcon from "@material-ui/icons/Call";
import GymIcon from "@material-ui/icons/FitnessCenter";

const NavBar = () => {
  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();
  const [anchorMenu, setAnchorMenu] = useState();
  const inputRef = useRef();

  const handleToggleMenu = (e) => {
    if (anchorMenu) setAnchorMenu(null);
    else setAnchorMenu(e.currentTarget);
  };

  const getImage = () => {
    if (imagePath) return imagePath;
    if (
      localStorage.getItem("image") &&
      localStorage.getItem("image") !== "undefined"
    )
      return localStorage.getItem("image");
    return "/images/person.png";
  };

  const handleAvatarChange = (e) => {
    const addr = "http://localhost:8000//";
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      uploadUserPhoto(formData, (isOK, data) => {
        console.log(data);
        if (!isOK) return toast.error(data);
        const delayInMilliseconds = 1000; //1 second

        setTimeout(function () {
          localStorage.setItem("image", addr + data.data.imagePath);
          toast.success("عكس شما با موفقيت آپلود شد");
        }, delayInMilliseconds);
      });
    }
  };

  return (
    <Navbar>
      <Nav>
        <Profile>
          <Grid
            container
            direction={"row-reverse"}
            onClick={handleToggleMenu}
            style={{ cursor: "pointer", justifyContent: "center" }}
          >
            <img src={getImage()} alt={"profile"} />
            <Grid item container direction={"column"}>
              <Typography>{localStorage.getItem("name")}</Typography>
            </Grid>
            <input
              ref={inputRef}
              type={"file"}
              style={{ display: "none" }}
              onChange={handleAvatarChange}
            />
          </Grid>
          {/* <img src="/images/profile.jpg" alt="" /> */}
        </Profile>
        <NavItems>
          <NavItem>
            <NavLink to="/admin/gym" exact activeClassName="active">
              <PostIcon /> gym
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/admin/equipments" exact activeClassName="active">
              <GymIcon /> equipments
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              to="/signout"
              exact
              activeClassName="active"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Sign out
            </NavLink>
          </NavItem>
        </NavItems>
        <NavFooter>
          <p>Your Profile Panel</p>
        </NavFooter>
        <Menu
          open={anchorMenu}
          onClose={() => setAnchorMenu(null)}
          anchorEl={anchorMenu}
        >
          <MenuItem
            onClick={() => {
              inputRef.current.click();
            }}
          >
            ویرایش عکس پروفایل
          </MenuItem>
        </Menu>
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

    @media screen and (max-width: 576px) {
      max-width: 90px;
    }
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
    font-weight: 400;
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
    @media screen and (max-width: 576px) {
      font-size: 16px;
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
    font-size: 20px;
    @media screen and (max-width: 576px) {
      font-size: 16px;
    }
  }
`;
