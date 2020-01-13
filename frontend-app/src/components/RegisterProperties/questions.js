import React, {useState} from 'react';
import CustomizedButtons from "./Button";
import ButtonSizes from "./ButtonCounter";
import './Questions.css';
import Button from "@material-ui/core/Button";

export default function Questionnaire (props) {
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

    const submit = props.submit;

    const data = {
        nameHeader:nameHeader,
        rooms: rooms,
        beds:beds,
        toilets:toilets,
        country:country,
        city:city,
        address:address,
        title:title,
        description:description,
        price:price
        };

   const handleOnSubmit = () => {
        const fetchdata = async () => {
            const url = 'http://127.0.0.1:80/api/property';
            const options = {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    //'Access-Control-Allow-Headers': 'Authorization',
                },
                mode: 'cors',
            };

            fetch(url, options)

                .then(response => {
                    if (response.status === 404) {
                        response.json().then((resp => {
                            return setError(resp.errors);
                            return (alert(resp.errors))
                        }))
                    } else if (response.status === 200) {
                        response.json().then((resp => {
                            //console.warn("resp",resp);
                            setError('');
                            return Promise.reject(alert(`Property creada ${resp.name} :)`))

                        }))

                    }
                }).catch(error => {
                setError(error);
                alert(error);// Este catch nos ejecuta algo cuándo no hay respuesta

            });

        };

        fetchdata()
    };

   if (submit) {
       handleOnSubmit();
   }

    if (props.activeStep===0){


        return(

        <div className="questionsMain">

            <div className="questionSubMain">
                <div id="Q1">
                    <span className="questionsSpan"> ¿Que tipo de alojamiento tienes? </span>
                    {array.map(v => (
                        <Button variant="contained" color={v === nameHeader ? 'Primary' : 'Secondary'}  onClick={() => {setNameHeader(v)}}>
                            {v}
                        </Button>
                    ))}

                </div>


                <div id="Q2">
                <span>¿ De cuántas habitaciones dispone?</span>
                    <ButtonSizes count={rooms} setCount={setRooms}/>
                 </div>

                <div id="Q3">
                    <span>¿ De cuántas camas dispone?</span>
                    <ButtonSizes count={beds} setCount={setBeds}/>
                </div>

                <div id="Q4">
                    <span>¿ De cuántos lavabos dispone?</span>
                    <ButtonSizes count={toilets} setCount={setToilets}/>
                </div>

                <div id="Q5">
                    <span>País:</span>
                    <input value={country} onChange={e => setCountry(e.target.value)} />

                </div>

                <div id="Q6">
                    <span>Ciudad:</span>
                    <input value={city} onChange={e => setCity(e.target.value)} />
                </div>

                <div id="Q7">
                    <span>Dirección:</span>
                    <input value={address} onChange={e => setAddress(e.target.value)} />
                </div>

            </div>
        </div>


    )}

    if(props.activeStep===1){
        return(
            <div>
                 <div id="Q8">
                    <span>Título del alojamiento:</span>
                     <input value={title} onChange={e => setTitle(e.target.value)} />
                 </div>

                <div id="Q9">
                    <span>Descripción:</span>
                    <input value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                <p>FOTO</p>

            </div>

        )
    }

    if(props.activeStep===2){
        return(
            <div>
                <div id="Q10">
                    <span>Precio del alojamiento:</span>
                    <input value={price} onChange={e => setPrice(e.target.value)} />
                </div>

                <div id="Q11">
                    <span>CALENDARIO</span>

                </div>


            </div>

        )
    }

    if(props.activeStep===3){
        return(
            <div>
            <p>Hello!</p>
            </div>

        )
    }
};

/*

 */