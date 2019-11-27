import React from 'react';

const list = [
    {
        name:'Condiciones',
        url:''

    }, {
        name:'Privacidad',
        url:''
    },{
        name:'Mapa del sitio',
        url:''

    }];


const ColumnFour = () => (

        <ul>
                {list.map(item =>(
                <li key={item.name}>
                    {item.new==='yes' ? <div><a href={item.url}>{item.name}</a> <span className="span_new">Nuevo</span> </div> : <div><a href={item.url}>{item.name}</a></div>}
                </li>
            ))}
        </ul>

);

export default ColumnFour;
