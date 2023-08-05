import React, { useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import axios from "axios";

export default function Navbar(props) {
  // const [loginData, setlogindata] = useState({})
  const [authData, setAuthData] = useState({});
  const [open, setopen] = useState(false);
  const [OpenRegister, setOpenRegister] = useState(false);
  const navigation = useNavigate();

  const handleLink = (path) => {
    navigation(path);
  };

  const handleOpenDialog = () => {
    setopen(true);
  };

  const handleOpenRegisterDialog = () => {
    setOpenRegister(true);
  };

  const handleCloseRegisterDialog = () => {
    setOpenRegister(false);
  };

  const handleChange = (e) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseDialog = () => {
    setopen(false);
  };

  const handleChangeUsername = (e) => {
    setlogindata({
      ...loginData,
      username: e.target.value,
    });
  };

  const handleChangePassword = (e) => {
    setlogindata({
      ...loginData,
      password: e.target.value,
    });
  };

  const handleLogin = () => {
    axios({
      url: "http://localhost:3000/login",
      method: "POST",
      data: authData,
    }).then((res) => {
      if (res.data.success) {
        props.setAvatarLetter(res.data.data.user.username.charAt(0).toUpperCase());
        localStorage.setItem("token", res.data.data.token);
        props.setIsLoggedIn(true);
        setopen(false);
      }
    });
  };

  const handleRegister = () => {
    axios({
      url: "http://localhost:3000/register",
      method: "POST",
      data: authData,
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="navbarContainer">
      <div className="logo">
        <h1>CHANG</h1>
      </div>

      <div className="menu">
        <div className="menuItem">
          <p onClick={() => handleLink("/products")}>Products</p>
        </div>

        <div className="menuItem">
          <p onClick={() => handleLink("/learning-center")}>Learning center</p>
        </div>

        <div className="menuItem">
          <p onClick={() => handleLink("/original-series")}>Original Series</p>
        </div>

        <div className="menuItem">
          <p onClick={() => handleLink("/aboutus")}>About Us</p>
        </div>
      </div>

      <div className="button">
        {!props.isLoggedIn ? (
          <div>
            <button onClick={handleOpenDialog} className="loginButtonStyle">
              Login
            </button>
            <button
              onClick={handleOpenRegisterDialog}
              className="getStartButtonStyle"
            >
              Register
            </button>
          </div>
        ) : (
          <Avatar
            className="Avatar"
            sx={{
              cursor: "pointer",
            }}
            onClick={() => handleLink("/profile")}
          >
            {props.avatarLetter}
          </Avatar>
        )}
      </div>

      <div className="navbarIcon">
        <MenuIcon />
      </div>
      <LoginDialog
        open={open}
        handleCloseDialog={handleCloseDialog}
        //  handleChangeUsername={handleChangeUsername}
        //  handleChangePassword={handleChangePassword}
        handleLogin={handleLogin}
        handleChange={handleChange}
      />

      <RegisterDialog
        open={OpenRegister}
        handleCloseRegisterDialog={handleCloseRegisterDialog}
        handleRegister={handleRegister}
      />
    </div>
  );
}
