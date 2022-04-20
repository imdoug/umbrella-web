import React, { useContext } from 'react'
import  { BiSearchAlt,BiNews, BiCalendar }  from 'react-icons/bi'
import { BsStar, BsChatText } from 'react-icons/bs'
import { UserContext } from '../../../context/UserContext'

const NavBar = () => {
      const { handleLogOut } = useContext(UserContext)
  return (
    <div style={{height: 60, width: '100%', borderBottom: '2px solid #000', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            {/* logo  */}
            <div style={{marginLeft: 40, width: '25%', border: '1px solid blue'}}>
                  <h2>Umbrella</h2>
            </div>
            {/*  search bar  */}
            <div style={{width: '50%', border: '1px solid gold', justifyContent: 'center'}}>
            {/* lupa */}
                  <div style={{display:'flex',justifyContent: 'center', alignItems:'center'}}>
                        <BiSearchAlt fontSize={20} />
                        <input style={{height: 20, width: 250, textIndent: 5}} placeholder='Search...' onChange={(e)=>{console.log(e.target.value)}}/>
                  </div>

            </div>
            <div style={{marginRight: 40, width: '20%', border: '1px solid red', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <BiNews fontSize={30}/>
                  {/* EVENTS RELATED TO THE COMUNITY  */}
                  <BiCalendar fontSize={30}/>
                  {/* USER CHATS */}
                  <BsChatText fontSize={30}/>
                  {/* MATCHES YOU HAD IN THE APP  */}
                  <BsStar fontSize={30}/>
                  <div style={{height: 40, width: 40, borderRadius: 50, background: '#000'}} onClick={()=>{handleLogOut()}}>
                        {/* user profile pic will come here */}
                  </div>
            </div>
    </div>
  )
}

export default NavBar