import React from 'react';
import './App.css';
import Aloha from './components/Aloha';
import Profile from "./components/Profilechange/Profile";
import Route from 'react-router-dom/Route';
import Switch from "react-router-dom/Switch";
import Changeprofile from "./components/Profilechange/Profilechange";
import Editphoto from "./components/Profilechange/Editphoto"

export const AuthContext = React.useContext();

const InitialState = {
    token: null,
    user:null,
    booleanAuth: false
};

const reducer = (state,action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user",JSON.stringify(action.payload.user));
            localStorage.setItem("token",JSON.stringify(action.payload.token));

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

    React.useEffect(()=>{

        const user = JSON.parse(localStorage.getItem("user"));
        const token = JSON.parse(localStorage.getItem("token"));

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
        </AuthContext.Provider>
    )
}

export default App;