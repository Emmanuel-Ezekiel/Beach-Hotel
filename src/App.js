import React from "react";
// import './App.css';
import './style.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="single-room" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
    </Routes>
    </>
  );
}

export default App;
