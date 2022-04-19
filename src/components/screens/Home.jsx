import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import { NavBar, Main, Footer } from './parts'

const Home = () => {
  const { handleLogin, handleChangeLogin, currentUser } = useContext(UserContext)
  let navigate = useNavigate()
  useEffect(()=>{
    if(!currentUser){
      navigate('/')
    }
  },[])
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default Home