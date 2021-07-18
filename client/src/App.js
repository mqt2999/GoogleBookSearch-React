import React from "react"
import Search from "./pages/Search";
import Nav from "./components/Nav/index"
import Jumbo from "./components/Jumbo/index"
import './App.css';

function App() {
  return (
    <>
   <Nav/>
   <Jumbo/>
   <Search/>
    <h1> hello world </h1>
    </>
  );
}

export default App;
