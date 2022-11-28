import React from 'react';
import '../estilos/Boton-Clear.css';

const BotonClear = (props) => (
    <div className='boton-clear' 
    // para el evento onClick establecemos el prop manejarClear, el cual en App.js 
    //estableceremos su valor.
    onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonClear;
