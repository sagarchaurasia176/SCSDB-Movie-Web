import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import HomeComponents from "./Components/HomeComponents";
import Trending from "./Components/Trending";
// App
const App = () => {
  return (
    <>
    <div className=" bg-slate-950  flex">
        <Routes>
          <Route path="/" element={<HomeComponents/>}></Route>
          <Route path="/Trending" element={<Trending/>}></Route>
        </Routes>
    </div>
    </>
  
  );
};

export default App;
