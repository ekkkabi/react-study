import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Music from "./component/Music";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/id/:id" element={<Music />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
