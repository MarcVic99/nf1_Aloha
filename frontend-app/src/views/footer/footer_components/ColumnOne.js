import React from 'react';

const list = [
    {
        name:'Empleo',
        url:''

    }, {
        name:'Noticias',
        url:''

    },{
        name:'Políticas',
        url:''

    },{
        name:'Ayuda',
        url:''

    },{
        name:'Diversidad e inclusión',
        url:''

    },{
        name:'Accesibilidad',
        url:''

    },{
        name:'Datos de la empresa',
        url:''

    },];


const ColumnOne = () => (

    <ul>{list.map(item => (
        <li key={item.name}>
            <div><a href={item.url}>{item.name}</a></div>
        </li>


    ))}</ul>
);


export default ColumnOne;