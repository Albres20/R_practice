import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';// el sercice worker se usaba para mantener al pagina aun cuando no se este en linea

ReactDOM.render(//Aqui en el render se esta obteniendo el logo + titulos +  parrafos que se ve en la pagina principal 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')// sto quiere decir que voy a tomar del documento que sería App y lo voy a establecer en la etiqueta 'root'
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
