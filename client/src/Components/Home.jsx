import React from 'react';
import estilo from '../Estilos/Home.module.css';
import SearchBar from './SearchBar';
import fondo from '../Imagenes/fondo.jpg';

export function Fondo (){
    return (
        <div style={{display: "flex", height: "100%", width:"100%"}}>
            <img src={fondo} style={{ width: "100%", height: "100%", position: "absolute", zIndex: "-10", filter: "brightness(0.4)"}}/>
        </div>
    )
}


export function Inicio ({funcion}){
    return (
        <div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%" }}>
            <h1 className={estilo.titulo}>Todo lo que buscas, en un solo lugar!</h1>
            <SearchBar funcion={funcion}/>
        </div>
    )
}