import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { NavBar, Footer } from "./parts";

const Profile = () => {
  const { currentUser, handleLogOut } = useContext(UserContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser]);
  return (
    <>
      <NavBar />
      <div>Profile</div>
      <button onClick={()=>{handleLogOut()}}>LOG OUT</button>
      <Footer />
    </>
  );
};

export default Profile;
