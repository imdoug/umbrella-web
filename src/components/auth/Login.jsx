import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext'


const Input = ({placeholder, name, type, value, handleChange }) =>(           
      <input placeholder={placeholder}
                  required
                  type={type}
                  value={value}
                  onChange={(e) => {handleChange(e,name)}}
      />
)

const Login = () => {
      const { handleLogin, handleChangeLogin } = useContext(UserContext)

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}} >
          <form onSubmit={(e)=>handleLogin(e)}>
                <Input  placeholder='Email' name='email' type='email' handleChange={handleChangeLogin}/>
                <Input placeholder='Password' name='password' type='password' handleChange={handleChangeLogin}/>
                <input type='submit' title='Login'/>
          </form>

          <Link to={"/register"}>Register</Link>
    </div>
  )
}

export default Login