import React, {Component} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import {APP_PRODUCTS} from "./routes/routes";
import { withRouter } from "react-router";


import './App.css';
import FooterLinks from "./footer/footer";


class App extends Component {
  render (){
    return (

    <FooterLinks/>

    );
  }




};
/*function App() {

  return(
      <BrowserRouter>
          <Route path={APP_PRODUCTS} component={footer}/>
      </BrowserRouter>
  )
}*/

export default App;
