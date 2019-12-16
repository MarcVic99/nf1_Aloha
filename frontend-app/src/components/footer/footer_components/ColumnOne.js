import React from 'react';

const list = [
    {
        name:'Empleo',
        url:'/Empleo'

    }, {
        name:'Noticias',
        url:'/noticias'

    },{
        name:'Políticas',
        url:'/políticas'

    },{
        name:'Ayuda',
        url:'/ayuda'

    },{
        name:'Diversidad e inclusión',
        url:'/diversidad e inclusion'


    },{
        name:'Accesibilidad',
        url:'/accesibilidad',
        new:'yes'

    },{
        name:'Datos de la empresa',
        url:'/datos de la empresa'

    },];


const ColumnOne = () => (

    <ul>{list.map(item => (
        <li key={item.name}>

             {item.new==='yes' ? <div><a href={item.url}>{item.name}</a> <span className="span_new">Nuevo</span> </div> : <div><a href={item.url}>{item.name}</a></div>}
        </li>


    ))}</ul>
);

export default ColumnOne;