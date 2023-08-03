import './App.css';
import logo from './imagenes/logo1.png';
import Boton from './componentes/boton.js';
import Pantalla from './componentes/pantalla';
import BtnClear from './componentes/BtnClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };
  
  const calcularResultado = () => {
    setInput(evaluate(input))
  };




  return (
    <div className="App">
       <div className='logo'>
         <img
           src={logo}
           className='logo1'
           alto='logo' />
         </div>
         <div className='contenedor-calculadora'>
      
            <Pantalla input= { input }/>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
             <Boton manejarClic={agregarInput}>8</Boton>
             <Boton manejarClic={agregarInput}>9</Boton>
             <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>

          </div>
          <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <BtnClear manejarClear={() => setInput('')}>C</BtnClear>
          </div>
         </div>
    </div>
  );
}

export default App;
