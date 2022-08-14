import React from "react";
import UserResults from "./components/UserResults";
import Home from "./components/Home";
import {BrowserRouter as Route, Router, Routes } from "react-router-dom";
import {GithubContext, GithubProvider} from './context/GithubContext'


function App(){ 
  return (
    
      <div className="App">
        <UserResults />
         
      </div>      
      
    
      )
}

export default App;
 