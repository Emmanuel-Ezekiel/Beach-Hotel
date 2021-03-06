import React from "react";
// import './App.css';
import './style.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/rooms/" element={<Rooms />} />
        <Route path="/singleroom/:slug"  element={<SingleRoom/>} />
        <Route path="*" element={<Error />} />
    </Routes>
    </>
  );
}

export default App;
