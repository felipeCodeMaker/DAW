import React from "react";
import '../hojasdeestilo/boton.css'



function Boton({ texto, esBotonDeClick, manejarClick }) {   //Las variables argumentos se tienen que llamar igual 
                                                            //que las de la llamada en App.js
  return (
    <button
      className={esBotonDeClick ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;