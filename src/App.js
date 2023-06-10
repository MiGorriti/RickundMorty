import "./App.css";
import React from "react";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/Searchbar/SearchBar.jsx";
import characters from "./data.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HOME/Home";



function App() {
  function searchHandler() {
    window.alert("El ID que estoy buscando");
  }

  function closeHandler() {
    window.alert("Emulamos que se cierra la card");
  }

  return (
    <Routes>
<Route path="/Home" element={<Home/>}/>
    
    </Routes>
  );

  return(
    <div>

  <SearchBar onSearch={searchHandler} />
  <Cards characters={characters} onClose={closeHandler} />
    </div>
  );
}

export default App;
