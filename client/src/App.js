import React, {useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Catalogo from './Components/Catalogo';
import NavBar from './Components/Nav';
import Home from './Components/Home';
import {FiltradoComponente, PrecioAsc, PrecioDesc, Nuevos, Usados} from './Components/Filtrado';
import axios from 'axios';
import './App.module.css';

function App() {
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  function onSearch(product){
    setLoading(true);
    axios.get(`http://localhost:3001/api/search?q=${product}`)
      .then (res =>{
        setProductos(res.data);
        setLoading(false);
      })
  }
  
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' render={() => <Home funcion={onSearch}/>}/>
        <div style={{textAlign: "center", marginTop: "100px"}}>
          <Route path='/products' render={() => <NavBar funcion={onSearch}/>}/>
          <Route path='/products' render={() => <FiltradoComponente productos={productos}/>}/>
          <Route exact path='/products/search' render={() => <Catalogo productos={productos} loading={loading}/>}/>
          <Route exact path='/products/filter/menor-precio' render={() => <PrecioAsc productos={productos}/>}/>
          <Route exact path='/products/filter/mayor-precio' render={() => <PrecioDesc productos={productos}/>}/>
          <Route exact path='/products/filter/nuevos' render={() => <Nuevos productos={productos}/>}/>
          <Route exact path='/products/filter/usados' render={() => <Usados productos={productos}/>}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
