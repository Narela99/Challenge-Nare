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
            <div style={{display:"flex",width: "500px"}}>
                <input  
                // className={estilo.input}
                        
                        type="search" 
                        placeholder="Buscar indumentaria, vehiculos, tecnologia, etc..." 
                        value={producto} 
                        onChange={e => setProduct(e.target.value)}ç
                        />
                <button class="btn btn-outline-light" style={{height: "45px", width:"80px", marginRight: "10px"}}type="submit">Buscar</button>
            </div>
        </form>
    )
}