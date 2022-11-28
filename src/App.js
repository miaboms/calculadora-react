import './App.css';
import freeCodeCampLogo from './imgs/fcc_primary.svg';
import Boton from './Componentes/Boton.js';
import Pantalla from './Componentes/Pantalla.js';
import BotonClear from './Componentes/Boton-Clear.js';
import { useState } from 'react';
//importamos un paquete externo gracias a Node.js, que nos permite hacer el calculo de los valores de 
//nuestra calculadora. para ello debemos instalarlo en la terminal con 'npm install mathjs'.
//una vez instalado va a aparecer como una de tus dependencias en package.json.
import { evaluate } from 'mathjs';

function App() {
  //creamos una funcion que calcula el resultado de nuestro input, que toma una funcion de mathjs 
  //"evaluate" parapoder generar el calculo
  const calcularResultado = () => {
    if (input) {
    setInput(evaluate(input));
    } else {
      alert('Por favor ingresar valores para generar el calculo.');
    }
  };
  //establecemos un state para la pantalla de la calculadora, siendo input en estado y setInput lo que
  //lo actualiza:
  const [input, setInput] = useState('');
  //La funcion flecha agregarInput va a tomar setInput y le va a agragar el valor que recibe y 
  //sumarlo a input/se podria haber creado la la funcion manejarClic, el event listener, pero lo 
  //autodefinimos dentro del componente Boton bc why not
  const agregarInput = val => {
    setInput(input + val);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor' >
        <img src={ freeCodeCampLogo }
        className='logo'
        alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={ input }/>
        <div className='fila'>
          {/* El componente Boton tiene un props.children, 
          este permite utilizar el 1 que escribimos entre los tags de Boton para usarlo como prop de Boton. */}
          <Boton manejarClic= {agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        {/* holi */}
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton> 
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          {/* Para el boton Clear, creamos el prop manejarClear y le establecemos como valor 
          el llamado a una funcion flecha que establece el setInput a ('') */}
          <BotonClear manejarClear={ () => setInput('') }>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
