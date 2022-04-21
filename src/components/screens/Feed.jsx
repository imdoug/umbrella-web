import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import { NavBar, Main, Footer } from './parts'


const Feed = () => {
  const { currentUser } = useContext(UserContext)
  let navigate = useNavigate()
  useEffect(()=>{
    if(!currentUser){
      navigate('/')
    }
  },[currentUser])
  return (
    <div>
        <NavBar />
          <Main />
        <Footer />
    </div>
  )
}

export default Feed