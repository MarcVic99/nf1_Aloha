import React, { useEffect } from 'react';
import './App.css';
import Aloha from './components/Aloha';
import Profile from "./components/Profilechange/Profile";
import { Route, Switch } from "react-router-dom";
import Changeprofile from "./components/Profilechange/Profilechange";
import Editphoto from "./components/Profilechange/Editphoto"
import Empleo from "./components/footer/footer_components/Empleo";
import Noticias from "./components/footer/footer_components/Noticias";
import Politicas from "./components/footer/footer_components/Politicas";
import Ayuda from "./components/footer/footer_components/Ayuda";
import DiversidadEInclusion from "./components/footer/footer_components/DiversidadEInclusion";
import Accesibilidad from "./components/footer/footer_components/Accesibilidad";
import DatosDeLaEmpresa from "./components/footer/footer_components/DatosDeLaEmpresa";
import Account from "./components/Profilechange/Account";
import PropertiesSearch from "./components/Properties/PropertiesSearch";
import LogIn from "./components/login/LogIn";
import {BrowserRouter} from 'react-router-dom';
import RegisterProperties from "./components/RegisterProperties/RegisterProperties";
import PropertiesList from "./components/Properties/PropertiesList";
import Booking from "./components/booking/Booking";

export const AuthContext = React.createContext();

const InitialState = {
    token: null,
    user:null,
    booleanAuth: false,
};

const reducer = (state, action) => {
    switch (action.type) {


        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));

            return {
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                booleanAuth: true
            };

        case "LOGOUT":
            localStorage.clear();

            return {
                ...state,
                user:null,
                token:null,
                booleanAuth: false
            };
        default:
            return state;
    }
};

function App() {
    const [state,dispatch] = React.useReducer(reducer,InitialState);

    useEffect(()=>{

        const user = JSON.parse(localStorage.getItem('user'));
        const token = JSON.parse(localStorage.getItem('token'));

        if (user && token) {
            dispatch({
                type: "LOGIN",
                payload: {
                    user,
                    token
                }
            })
        }
    },[]);


    return (

        <AuthContext.Provider
            value={{state,dispatch}}>
            <BrowserRouter>
            <Switch>
                <Route path="/booking" exact>
                    <Booking/>
                </Route>
                <Route path="/RegisterProperties" exact>
                    <RegisterProperties/>
                </Route>
                <Route path="/myproperty" exact>

                </Route>
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
                <Route path= '/HeaderLogo'>
                    <Aloha />
                </Route>
                <Route exact path="/login">
                    <LogIn />
                </Route>

                <Route exact path="/empleo">
                    <Empleo />
                </Route>
                <Route exact path="/noticias">
                    <Noticias />
                </Route>

                <Route exact path="/politicas">
                    <Politicas />
                </Route>

                <Route exact path="/ayuda">
                    <Ayuda />
                </Route>
                <Route exact path="/diversidad e inclusion">
                    <DiversidadEInclusion />
                </Route>
                <Route exact path="/accesibilidad">
                    <Accesibilidad />
                </Route>
                <Route exact path="/datos de la empresa">
                    <DatosDeLaEmpresa />
                </Route>
                <Route exact path="/account">
                    <Account />
                </Route>
                <Route exact path="/search/property">
                    <PropertiesSearch />
                </Route>
                <Route exact path="/property">
                    <PropertiesList />
                </Route>

            </Switch >
            </BrowserRouter>
        </AuthContext.Provider>

    )
}

export default App;