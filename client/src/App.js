import React from "react"
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav/index"
import Jumbo from "./components/Jumbo/index"
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <>
   <Nav/>
   <Jumbo/>
   <Route exact path="/"
   component={Search}/>
   <Route exact path="/search"
   component={Search}/>
   <Route exact path="/saved"
   component={Saved}/>
    <h1> hello world </h1>
    </>
    </Router>
  );
}

export default App;
