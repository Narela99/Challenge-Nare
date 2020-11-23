import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import estilo from "../Estilos/Search.module.css"
export default function Search ({funcion}){
    const[producto, setProduct]= useState([]);
    const history= useHistory();

    return (
        <form 
            onSubmit={(e) => {
            e.preventDefault(); 
            funcion(producto); 
            history.push('/products/search');
            }}>
            <div style={{display:"flex",width: "700px"}}>
                <input  
                    className={estilo.input}
                    style={{backgroundColor: "white", color: "black", borderRadius: "5px", height: "60px", fontSize: "20px"}}
                    type="search" 
                    placeholder="Buscar indumentaria, vehiculos, tecnologia, etc..." 
                    value={producto} 
                    onChange={e => setProduct(e.target.value)}
                />
                <button class="btn btn-outline-light" style={{height: "60px", width:"100px", marginLeft: "10px"}}type="submit">Buscar</button>
            </div>
        </form>
    )
}