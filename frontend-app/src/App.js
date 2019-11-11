import React, {Component} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import {FOOTER_APP} from "./routes/routes";
import { withRouter } from "react-router";


import './App.css';
import FooterLinks from "./views/footer/footer";
import SignIn from "./views/SignIn/SignIn";
import LogIn from "./views/LogIn/LogIn";

function App() {

  return(
      <LogIn/>
     // <SignIn/>
     // <FooterLinks/>
  );

}

export default App;
