import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { NavBar, Footer } from "./parts";

const Favorites = () => {
  const { currentUser, data } = useContext(UserContext)
  let navigate = useNavigate()
  useEffect(()=>{
    if(!currentUser){
      navigate('/')
    }
  },[currentUser])
  return (
    <>
      <NavBar />
      <div>
           <h1>Favorites</h1>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
