import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/screens/Home';
import  UserProvider from './context/UserContext';


function App() {
  const user = false
  
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {user && <Route path='/home' element={<Home/>}/>}
      </Routes>
    </UserProvider>
  );
}

export default App;
