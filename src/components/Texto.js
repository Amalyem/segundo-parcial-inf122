import React from 'react';
import '../styles/Texto.css';
import {useState} from React ;
function  Texto() {
    const[añadir, setAñadiendo]=useState([]);
    const [click,setClick]=useState('no se añadio nada')
    

    return(

        <label className='Introducir'>
            <input type='text' className='Nueva-Meta'  />

        </label>
     );
    
}
export default Texto;