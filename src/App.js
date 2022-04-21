import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Feed, Favorites } from "./components";
import UserProvider from "./context/UserContext";
import Profile from "./components/screens/Profile";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
