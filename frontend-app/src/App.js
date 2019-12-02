import React from 'react';
import './App.css';
import Aloha from './components/Aloha';
import Profile from "./components/Profilechange/Profile";
import Route from 'react-router-dom/Route';
import Switch from "react-router-dom/Switch";
import Changeprofile from "./components/Profilechange/Profilechange";
import Editphoto from "./components/Profilechange/Editphoto"

function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <Aloha />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/profile/edit">
                <Changeprofile />
            </Route>
            <Route exact path="/user/edit-photo">
                <Editphoto />
            </Route>

        </Switch >
    )
}

export default App;