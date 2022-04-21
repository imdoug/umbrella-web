import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import { useNavigate } from "react-router-dom";


const Input = ({placeholder, name, type, value, handleChange }) =>(           
      <input placeholder={placeholder}
                  required
                  type={type}
                  value={value}
                  onChange={(e) => {handleChange(e,name)}}
      />
)

const Login = () => {
      const { handleLogin, handleChangeLogin, currentUser } = useContext(UserContext)
      let navigate = useNavigate()
      useEffect(()=>{
            if(currentUser){
                  navigate('/feed')
            }
      }, [currentUser])
      return (<>
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}} >
            <form onSubmit={(e)=>handleLogin(e)}>
                <Input  placeholder='Email' name='email' type='email' handleChange={handleChangeLogin}/>
                <Input placeholder='Password' name='password' type='password' handleChange={handleChangeLogin}/>
                <input type='submit'/>
            </form>

            <Link to={"/register"}>Register</Link>
      </div>
  </>)
}

export default Login