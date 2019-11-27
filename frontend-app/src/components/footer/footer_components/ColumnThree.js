import React from 'react';

const list = [
    {
    name:'Razones para hospedar',
    url:''

}, {
    name:'Hospitalidad',
    url:''

},{
    name:'Ser un anfitrión responsable',
    url:''

},{
    name:'Centro de la comunidad',
    url:''

},{
    name:'Ofrece una experiencia',
    url:'',
    new:'yes'
}, {
    name: 'OpenHomes',
    url: ''

}];

const ColumnThree = () => (

    <ul>
        {list.map(item =>(
            <li key={item.name}>
                {item.new==='yes' ? <div><a href={item.url}>{item.name}</a> <span className="span_new">Nuevo</span> </div> : <div><a href={item.url}>{item.name}</a></div>}
            </li>
        ))}
    </ul>
);

/*const ColumnThree =() => (


    < div ClassName={'c3Container'}>
        <h4>Hospedar</h4>
        <div ClassName={'c3Links'}>
            <ul>
                <li><a href=""> Razones para hospedar </a></li>
                <li><a href=""> Hospitalidad </a></li>
                <li><a href="">Ser un anfitrión responsable </a></li>
                <li><a href="">Centro de la comunidad</a></li>
                <li><a href="">Ofrece una experiencia </a> <span className="span_new">Nuevo </span></li>
                <li><a href="">Open Homes </a></li>
            </ul>
        </div>

    </div>
);*/

export default ColumnThree;