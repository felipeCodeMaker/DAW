import './App.css';
import Contador from './Componentes/Contador';
import Boton from './Componentes/Boton';
import Cabecera from './Componentes/Cabecera';
import Pie from './Componentes/Pie';
import logoies from './img/Tardeo.png'; // Asegúrate de importar la imagen
import { useState } from 'react';

function App() {

  
  //Esto es un hook numClicks es una variabl de estado 
  //setNumClick es la funcion para manejar el estado
  // cerp es el valor incial de numclicks
  //useState es un hook que permite asignar un estado a un componente

  
  const [numClicks, setNumClicks] = useState(0);  //setNumClicks se puede llamar de otra forma
  const manejarClick = ()=>{
    setNumClicks(numClicks +1);
  }

  const reiniciarContador = ()=>{
    setNumClicks(0);
  }

  const restarContador = ()=>{
    setNumClicks(numClicks -1);
  }


  const inicializarContador = ()=>{
    setNumClicks(9);
  }

  return (
    <div className="App">
      <div className="iesazarquiel-logo-contenedor">
        <img className="iesazarquiel-logo" src={logoies} alt="logo" />
        
        <div className='contador-principal'>

          <Cabecera texto = 'Bienvenido a ¡¡¡¡¡¡Contador De Clicks!!!!!!!!'/>

          <Contador numClicks={numClicks}/>
        
          <Boton texto='Click' esBotonClick = {true} manejarClick={manejarClick}/>

          <Boton texto = 'Reiniciar' esBotonClick={false} manejarClick={reiniciarContador}/>

          <Boton texto = 'Restar' esBotonClick={true} manejarClick={restarContador}/>

          <Boton texto = 'Inicializar' esBotonClick={false} manejarClick={inicializarContador}/>

          <Pie texto = "Web creada por Felipe García el rey del mundo"/>
          
        </div>
      </div>
    </div>
  );
}

export default App;