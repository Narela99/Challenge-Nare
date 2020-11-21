import React from 'react';
import estilo from '../Estilos/Catalogo.module.css'

export default function ProductCard({id, image, title, price, stock, sold, condition}){
    var condicion = () => {
        if(condition === "new"){
            return(<span class="badge badge-success">Nuevo</span>)
        }
        else return (<span class="badge badge-warning">Usado</span>)
    }

    var stockk = ()=>{
        if(stock === 1){
            return (<p class="card-text" style={{color: "gray"}}>Stock: {stock} unidad.</p>)
        }
        return (<p class="card-text" style={{color: "gray"}}>Stock: {stock} unidades.</p>)
    }

    return(
        <div className={estilo.card}>
            <div >
                <div style={{display: "flex", justifyContent: "center", marginTop:"10px"}}>
                    <img src={image} style={{ maxWidth: "200px", height: "200px" }} class="card-img-top" />
                </div>
                <div class="card-body " style={{display: "flex", flexDirection:"column", alignItems:"end"}}>
                    <h4 class="card-text" style={{color: "black"}}>${price}</h4>
                    {condicion()}
                    <div style={{marginTop: "20px"}}>
                        <h6 class="card-text" style={{color: "black", width: "220px" , whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>{title}</h6>
                        {stockk()}
                    </div>
                </div>
            </div>
        </div>
    )
}