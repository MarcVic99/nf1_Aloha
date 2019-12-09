import React, { useContext, useEffect, useState, useReducer } from "react";
import "./Profilechange.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Profilephoto from "./Profilephoto";
import FooterLinks from "../footer/footer";
import {
  getToken,
  saveInLocalStorage,
  getFromLocalStorage,
  TOKEN_KEY
} from "../../utils/localstorage";
import { Link, withRouter } from "react-router-dom";

export default function ChangeProfile() {
  const VIEW_USER = "VIEW_USER";
  const SET_ERROR = "SET_ERROR";
  const token = getToken();
  const initialState = {
    userData: [],
    error: false
  };
  
  const userReducer = (state = initialState, action) => {
    const newState = { ...state };
    const { type } = { ...action };
    if (type === VIEW_USER) {
      newState.userData = action.userData;
    }
    if (type === SET_ERROR) {
      newState.error = action.error;
    }
    return newState;
  };
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://127.0.0.1/api/users/2?token=${token.access_token}`;
      const options = {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
          "Access-Control-Allow-Headers": "Authorization",
          "Content-Type": "application/json"
        }),
        mode: "cors"
      };
      return fetch(url, options)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
          return Promise.reject(response.status);
        })
        .then(data => {
          dispatch({
            type: VIEW_USER,
            userData: data
          });
        })
        .catch(error =>
          dispatch({
            type: SET_ERROR,
            error: true
          })
        );
    };
    fetchData();
  }, []);

  return state.userData ? (
    <div id="main">
      <section>
        <div>
          <Navbar />

          <div className="marginout">
            <Profilephoto />

            <div className="changeform">
              <div>
                <div className="intro">
                  <h1>Hola:Soy Zsofia</h1>
                  <div className="regedit">
                    <p>Se registró en 2019</p>
                  </div>
                </div>
                <br />
                <div>
                  <div className="formlabel">
                    <label>Acerca de</label>
                  </div>
                  <textarea
                    className="aboutinfo"
                    name="about"
                    rows="4"
                    spellCheck={true}
                    value={about}
                    onChange={event => setAbout(event.target.value)}
                    tabIndex="1"
                  />
                </div>
                <br />
                <div>
                  <div className="formlabel">
                    <label>Ubicación</label>
                  </div>
                  <input
                    className="inputfield"
                    name="where"
                    value={where}
                    onChange={event => setWhere(event.target.value)}
                    tabIndex="2"
                  />
                </div>
                <br />
                <div>
                  <div className="formlabel">
                    <label>Idiomas que hablo</label>
                  </div>
                  <input
                    className="inputfield"
                    name="languages"
                    value={languages}
                    onChange={event => setLanguages(event.target.value)}
                    tabIndex="3"
                  />
                </div>
                <br />
                <div>
                  <div className="formlabel">
                    <label>Trabajo</label>
                  </div>

                  <input
                    className="inputfield"
                    name="job"
                    type="job"
                    value={job}
                    onChange={event => setJob(event.target.value)}
                    tabIndex="5"
                  />
                </div>
                <br />
                <div className="buttonmargin">
                  <div>
                    <button
                      tabIndex="6"
                      className="changebutton"
                      onClick={handleOnChange}
                    >
                      Guardar
                    </button>
                    <button
                      tabIndex="7"
                      className="cancelbutton"
                      onClick={handleOnChange}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
                <div>
                  <hr />
                  <br />
                  <div className="editprofile">
                    <Link to="/users/reviews">Evaluaciones hechas por ti</Link>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <footer>
        <FooterLinks />
      </footer>
    </div>
  ) : (
    <p>hola</p>
  );
}

