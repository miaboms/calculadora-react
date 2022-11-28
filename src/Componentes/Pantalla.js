import React from 'react';
import '../estilos/Pantalla.css';

//podemos usar funciones flecha o funciones normales para crear componentes funcionales
const Pantalla = ({ input }) => (
    <div className='input'>
        { input }
    </div>
);

export default Pantalla;
