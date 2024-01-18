 
import './App.css';
import Meta from'./components/Meta.js'
import ListaMetas from './components/ListaMetas'
import Texto from './components/Texto.js';
import {useState} from 'react';

function App() {
  const [añadir, setAñadir] = useState([]);

  
  
  const  add=()=>{
    console.log("Se esta Añadiendo")
  }
  const añadiendo=()=>{
     console.log ("Tu meta ya esta")
  }
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1 className="title">Mis metas</h1>
        <div className='contenedor-añadir'>
           
          <Texto />
          <Meta
           esClick={true}
           texto="Agregar"
           funcionAdd={add}
           />
            
        </div>
        <div>
          <ListaMetas funcionSeAñadio={añadiendo}/>
        </div>
       

      </div>
     
    
      
    </div>
  );
}

export default App;
