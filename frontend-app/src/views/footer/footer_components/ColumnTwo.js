import React from 'react';
const list = [
    {
        name:'Confianza y seguridad',
        url:''

    }, {
        name:'Crédito para viajar',
        url:''

    },{
        name:'Airbnb Citizen',
        url:''

    },{
        name:'Viajes de negocios',
        url:''

    },{
        name:'Actividades',
        url:''

    }, {
        name: 'Airbnbmag',
        url: ''

    }];

const ColumnTwo = () => (
    <ul>
        {list.map(item =>(
            <li key={item.name}>
                <div><a href={item.url}>{item.name}</a></div>
            </li>
        ))}
    </ul>

);

export default ColumnTwo;