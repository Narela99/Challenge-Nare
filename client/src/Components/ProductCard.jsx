import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Estilos/ProductCard.css';

export default function ProductCard({id, image, title, price, stock, sold, condition, currency}){
    var condicion = () => {
        if(condition === "new"){
            return(<span class="badge badge-success" style={{color: "black", marginLeft: "0px", marginTop: "7px"}}>Nuevo</span>)
        }
        else return (<span class="badge badge-warning" style={{color: "black", marginLeft: "0px", marginTop: "7px"}}>Usado</span>)
    }

    var stockk = ()=>{
        if(stock === 1){
            return (<p class="card-text" style={{color: "gray"}}>Stock: {stock} unidad.</p>)
        }
        return (<p class="card-text" style={{color: "gray"}}>Stock: {stock} unidades.</p>)
    }

    return(
         <div className="cards">
             <NavLink to={`/producto/${id}`} style={{textDecoration: "none"}}>
            <div>
                <div style={{display: "flex", justifyContent: "center", marginTop:"10px"}}>
                    <img src={image} style={{ maxWidth: "200px", height: "200px", objectFit: "contain" }} class="card-img-top" />
                </div>
                <div class="card-body " style={{display: "flex", flexDirection:"column", alignItems:"end"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <h6 style={{color: "black", marginBottom: "0px"}}>{currency}</h6>
                        <h4 class="card-text" style={{color: "black"}}>${price}</h4>
                    </div>
                    {condicion()}
                    <div style={{marginTop: "20px", width: "220px"}}>
                        <h6 class="truncate" style={{color: "black"}}>{title}</h6>
                        {stockk()}
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    )
}