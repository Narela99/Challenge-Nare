import React from 'react';
import SearchBar from './SearchBar';
import estilo from '../Estilos/Home.module.css';
import fondo from '../Imagenes/fondo.jpg';

export default function Navbar({funcion}){

    return (
        <div style={{zIndex: "10"}}>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top " style={{borderBottom: " 1px solid white", backgroundColor: "transparent", height: "110px"}}>
                <div class='row row-cols-3 valign-wrapper' style={{width:"100%", height:"110px", marginBottom: "0"}}>
                    <div class='col-3 valign-wrapper'>
                        <a class="navbar-brand" href="/" style={{fontSize: "27px"}}>Inicio</a>
                        {/* <div class="collapse navbar-collapse" id="navbarColor03">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/products/catalogo">Catalogo
                                    <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>   */}
                    </div> 
                    <div class='col-6'>
                        <SearchBar funcion={funcion}/>
                    </div>
                </div>
            </nav>
        </div> 
          
    )
}