import React, {useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Catalogo from './Components/Catalogo';
import NavBar from './Components/Nav';
import {Home, Inicio, Fondo} from './Components/Home';
import {FiltradoComponente, PrecioAsc, PrecioDesc, Nuevos, Usados} from './Components/Filtrado';
import axios from 'axios';
import estilo from './App.module.css';
// import Imagenes from './Components/Imagenes';
import estilos from './Estilos/Home.module.css';
import fondo from './Imagenes/fondo.jpg';
import Producto from './Components/Imagenes';

function App() {
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState();

  function onSearch(product){
    setLoading(true);
    axios.get(`http://localhost:3001/api/search?q=${product}`)
      .then (res =>{
        setProductos(res.data);
        setLoading(false);
      })
  }
  
  return (
    <div className={estilos.app}>
        <BrowserRouter>
        <Route path='/' render={() => <Fondo/>}/>
          {/* <img src={fondo} style={{display: "flex", width: "100%", height: "100%", position: "fixed", zIndex: "-10", filter: "brightness(0.4)"}}/> */}
          <Route exact path='/' render={() => <Inicio funcion={onSearch}/>}/>
          {/* <div style={{marginTop: "115px"}}> */}
            <Route path='/products' render={() => <NavBar funcion={onSearch}/>}/>
            <Route path='/products' render={() => <FiltradoComponente productos={productos}/>}/>
            <Route exact path='/products/search' render={() => <Catalogo productos={productos} loading={loading}/>}/>
            <Route exact path='/products/filter/menor-precio' render={() => <PrecioAsc productos={productos}/>}/>
            <Route exact path='/products/filter/mayor-precio' render={() => <PrecioDesc productos={productos}/>}/>
            <Route exact path='/products/filter/nuevos' render={() => <Nuevos productos={productos}/>}/>
            <Route exact path='/products/filter/usados' render={() => <Usados productos={productos}/>}/>
            {/* <Route exact path='/imagenes' render={() => <Imagenes/>}/> */}
            <Route exact path={`/producto/:id`} render={({match}) => <Producto id= {match.params.id}/>}/>
          {/* </div> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
