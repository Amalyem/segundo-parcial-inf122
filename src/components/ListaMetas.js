import React from 'react';
import "../styles/ListaMetas.css"
function ListaMetas(){
    return(
        <div className='box'>
            <div className='two-boxes'>
                <div className='complete'>
                <p> Completadas</p> 
                </div>
                <div className='pendiente'>
                <p > Pendientes</p>
                </div>
             
            </div>
            
            <div className='tarea'>
            <p>apewnder css</p>
            </div>
            

        </div>
    );
}
export default ListaMetas;