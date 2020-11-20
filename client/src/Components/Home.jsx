import React from 'react';
import estilo from '../Estilos/Home.module.css';
import SearchBar from './SearchBar';
import fondo from '../Imagenes/fondo.jpg';

export default function Home ({funcion}){
    return (
        <div>
            <div className={estilo.img}>
                <img src={fondo} style={{width: "100%", height: "100%"}}/>
            </div>
            <div className={estilo.divOscuro}> 
               <h1 style={{fontSize: "65px"}}>Todo lo que buscas, en un solo lugar!</h1>
               <SearchBar funcion={funcion}/>
            </div>
        </div>
    )
}