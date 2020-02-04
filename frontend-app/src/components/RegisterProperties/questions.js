import React, {useState, useEffect} from 'react';
import CustomizedButtons from "./Button";
import ButtonSizes from "./ButtonCounter";
import './Questions.css';
import Button from "@material-ui/core/Button";
import {AuthContext} from "../../App";
import { useHistory } from "react-router-dom";

export default function Questionnaire (props) {
 
    const {state, dispatch} = React.useContext(AuthContext);
    const [nameHeader, setNameHeader] = useState('');
    const [rooms, setRooms] = useState(0);
    const [beds, setBeds] = useState(0);
    const [toilets, setToilets] = useState(0);
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0);
    const [error, setError] = useState('');
    const array = ['Casa', 'Apartamento', 'Piso', 'Bed & Breakfast', 'Chalet'];
    const [dataToRedirect, setDataToRedirect] = useState();

    let history = useHistory();

    const token = JSON.parse(localStorage.getItem('token'));
    const submit = props.submit;

    const data = {
        nameHeader: nameHeader,
        rooms: rooms,
        beds: beds,
        toilets: toilets,
        country: country,
        city: city,
        address: address,
        title: title,
        description: description,
        price: price,
        additional_info: null,
        rating: null,
    };



    useEffect(() => {
        const url = 'http://127.0.0.1:80/api/property';
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
                //'Access-Control-Allow-Headers': 'Authorization',
            },
            mode: 'cors',
        };
        if (submit) {

            fetch(url, options)

                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw response;
                })
                .then(responseJson => {
                    setDataToRedirect(responseJson);

                    history.push(`/property/`);



                })
                .catch(error => {
                    setError(error);
                });

        }

    }, [submit]);


    if (props.activeStep === 0) {


        return (

        <div className="questionsMain">

            <div className="questionSubMain">
                <div id="Q1">
                    <div style={{marginBottom:"10px"}} className="questionsSpan">¿Que tipo de alojamiento quieres anunciar? </div>
                    {array.map(v => (
                        <Button variant="contained" color={v === nameHeader ? 'Primary' : 'Secondary'}  onClick={() => {setNameHeader(v)}}>
                            {v}
                        </Button>
                    ))}

                </div>


                <div id="Q2">
                <div className="questionsSpan">¿ De cuántas habitaciones dispone?</div>
                    <ButtonSizes count={rooms} setCount={setRooms}/>
                 </div>

                <div id="Q3">
                    <div className="questionsSpan">¿ De cuántas camas dispone?</div>
                    <ButtonSizes count={beds} setCount={setBeds}/>
                </div>

                <div id="Q4">
                    <div className="questionsSpan">¿ De cuántos lavabos dispone?</div>
                    <ButtonSizes count={toilets} setCount={setToilets}/>
                </div>

                <div id="Q5">
                    <span className="questionsSpan">País:</span>
                    <input className="input" value={country} onChange={e => setCountry(e.target.value)} />

                </div>

                <div id="Q6">
                    <span className="questionsSpan">Ciudad:</span>
                    <input className="input" value={city} onChange={e => setCity(e.target.value)} />
                </div>

                <div id="Q7">
                    <span className="questionsSpan">Dirección:</span>
                    <input className="input" value={address} onChange={e => setAddress(e.target.value)} />
                </div>

            </div>
        </div>


    )}

    if(props.activeStep===1){
        return(
            <div>
                 <div id="Q8">
                    <span className="questionsSpan">Título del alojamiento</span>
                     <input className="input" value={title} onChange={e => setTitle(e.target.value)} />
                 </div>

                <div id="Q9">
                    <span className="questionsSpan">Descripción</span>
                    <textarea className="textField"   rows="10" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div id="10">
                    <span className="questionsSpan">Añade fotos a tu anuncio</span>

                </div>

                <p>FOTO</p>

            </div>

        )
    }

    if(props.activeStep===2){
        return(
            <div>
                <div id="Q11">
                    <span className="questionsSpan">Precio del alojamiento:</span>
                    <input className="inputprice" value={price} onChange={e => setPrice(e.target.value)} />
                </div>

                <div id="Q12">
                    <span>CALENDARIO</span>

                </div>

            </div>

        )
    }


};

