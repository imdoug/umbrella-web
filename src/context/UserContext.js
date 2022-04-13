import React, { createContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ( { children }) =>{
      const [userLogin, setUserLogin] = useState({email: '', password: ''})
      const [userRegister, setUserRegister] = useState({email: '', password: '', username: ''})
      const handleLogin = (e) =>{
            e.preventDefault()
            console.log(userLogin)
      }
      const handleRegister = (e) =>{
            e.preventDefault()
            console.log(userRegister)
      }
      const handleChangeLogin = (e, name) =>{
            setUserLogin((prevState) => ({...prevState, [name]: e.target.value}))
      }
      const handleChangeRegister = (e, name) =>{
            setUserRegister((prevState) => ({...prevState, [name]: e.target.value}))
      }

      return (
            <UserContext.Provider value={{ handleLogin, handleRegister, handleChangeLogin, handleChangeRegister }}>
                  { children }
            </UserContext.Provider>
      )
}

export default UserProvider