import React from "react";
import '../hojasdeestilo/cabecera.css'



function Cabecera({texto}) {   //Las variables argumentos se tienen que llamar igual 
                                                            //que las de la llamada en App.js
  return (
    <header className='cabecera' >
        {texto}
    </header>
  );
}

export default Cabecera;