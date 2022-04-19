import React, { useContext, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import { useNavigate } from "react-router-dom";


const Input = ({placeholder, name, type, value, handleChange }) =>(
      <>
      {name === 'tel' 
      ?     <input placeholder={placeholder}
                  required
                  type={type}
                  value={value}
                  onChange={(e) => {handleChange(e,name)}}
            />
      :     <input placeholder={placeholder}
                  required
                  type={type}
                  value={value}
                  onChange={(e) => {handleChange(e,name)}}
            /> }
      </>
    )

const Register = () => {
      const { handleRegister, handleChangeRegister, currentUser } = useContext(UserContext)
      let navigate = useNavigate()
      useEffect(()=>{
            if(currentUser){
                  navigate('/home')
            }
      }, [currentUser])
      return (
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <form onSubmit={(e)=>handleRegister(e)} >
                  <Input placeholder='Username' name='username' type='text' handleChange={handleChangeRegister} />
                  <Input placeholder='Email' name='email' type='email' handleChange={handleChangeRegister} />
                  <Input placeholder='Password' name='password' type='password' handleChange={handleChangeRegister} />
                  <input type="submit" value="Register"/>
            </form>
            <Link to={"/"}>Login</Link>
      </div>
      )
}

export default Register