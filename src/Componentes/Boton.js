import React from 'react';
import '../estilos/Boton.css';

function Boton(props) {

    const esOperador = valor => {
        //funcion isNaN(isNotaNumber) retorna un valor boleano que indica si el valor NO es un numero.
        return isNaN(valor) &&(valor != '.') && (valor != '=');
    };

    return (
        <div 
        // creamos una clase elaborada con template literals(encerrados entre ``) para poder agregar
        //'subclases'. Tenemos entre ${} una funcion esOperador(), que toma el children del componente,
        //nos va a devolver un booleano que usaremos para el operador ternario 
        //(funcion ? respuesta_true : respuesta_false) que agregara a 'boton-contenedor' el string 'operador'
        //en caso de ser un operador.
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
        //en la propiedad onClick creamos manejarClic, agregandole la sintaxis de arrow function (dentro
        //de las llaves porque es sintaxis JS) creando asi una funcion dentro de un prop.
        //la ()=> le esta diciendo a JS que queremos que onClick llame a una funcion 
        onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton;