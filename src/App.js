 
import './App.css';
import Meta from'./components/Meta.js'
import ListaMetas from './components/ListaMetas'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 className="title">Mis metas</h1>
        <div className='contenedor-añadir'>
          <Meta/>
 

        </div>
        <div>
          <ListaMetas/>
        </div>
       

      </div>
     
    
      
    </div>
  );
}

export default App;
