import React from 'react';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';

const icons = [
    {
        name: 'Facebook',
        icon: {facebook},
        url: 'https://Facebook.com',
    },
    {
        name: 'Instagram',
        icon: {instagram},
        url: 'https://Instagram.com',


    },
    {
        name:'Twitter',
        icon:{twitter},
        url:'https://Twitter.es',
    },
    ];

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
    <ul className={'ulIcons'}>
        {icons.map(itemIcons => (
            <li key={itemIcons.name}>
                <div><a href={itemIcons.url}> <img alt={'IconsImages'} src={itemIcons.icon} width={20} height={20}></img></a></div>
            </li>
        ))}

        {list.map(item =>(
            <li key={item.name}>
                <div><a href={item.url}> {item.name}</a></div>
            </li>
        ))}

    </ul>

)


/*
const ColumnFour =() => (

    < div ClassName={'c4Container'}>
        <h4>Discover</h4>
        <div ClassName={'c4Imgs'}>

        /*    <a href="https://www.facebook.com"><img src={'facebook'}/></a>
            <a href="https://twitter.com"></a>
            <a href="https://instagram.com"></a>

        </div>
        <div ClassName={'c4Links'}>
            <ul>
                <li> <a>Condiciones</a></li>
                <li> <a>Privacidad</a></li>
                <li> <a>Mapa del sitio</a></li>
            </ul>
        </div>



    </div>

);
*/
export default ColumnFour;