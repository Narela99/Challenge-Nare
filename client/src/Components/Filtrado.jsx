import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Catalogo from './Catalogo';

export function FiltradoComponente (){
    
    return (
        <div style={{position: "absolute", width: "200px", height: "100%", borderRight: "1px solid white", position: "fixed", marginTop: "115px"}}>
            <div style={{marginTop:"20px"}}>
                <div >
                    <h5 style={{display: "flex", fontWeight: "bold", fontSize: "17px", marginLeft: "15px"}}>Filtrar por precio:</h5> 
                    <NavLink to="/products/filter/menor-precio" style={{ textDecoration: 'none', display: "flex", marginLeft: "15px", fontSize: "17px" }}>
                        <h6> • Menor Precio</h6>
                    </NavLink>
                    <NavLink to="/products/filter/mayor-precio" style={{ textDecoration: 'none', display: "flex", marginLeft: "15px", fontSize: "17px" }}>
                        <h6>• Mayor Precio</h6> 
                    </NavLink>
                </div> 
                <div style={{marginTop: "25px"}}>
                    <h5 style={{display: "flex",fontWeight: "bold", fontSize: "17px", marginLeft: "15px"}}>Filtrar por Estado:</h5> 
                    <NavLink to="/products/filter/nuevos" style={{ textDecoration: 'none', display: "flex", marginLeft: "15px", fontSize: "17px" }}>
                        <h6> • Nuevos</h6>
                    </NavLink>
                    <NavLink to="/products/filter/usados" style={{ textDecoration: 'none', display: "flex", marginLeft: "15px", fontSize: "17px" }}>
                        <h6>• Usados</h6> 
                    </NavLink>
                </div> 
            </div>  
        </div>
    )
}

export function PrecioAsc({productos}){              //precio de menor a mayor
    var arr = productos.sort(function (a, b){
        if(a.price > b.price){
            return 1;
        }
        if(a.price < b.price){
            return -1;
        }
        return 0;
    })
    console.log(arr)
    return (<Catalogo productos={arr}/>)    
}

export function PrecioDesc({productos}){             //precio de mayor a menor
    var arr = productos.sort(function (a, b){
        if(a.price < b.price){
            return 1;
        }
        if(a.price > b.price){
            return -1;
        }
        return 0;
    })
    console.log(arr)
    return (<Catalogo productos={arr}/>)    
}

export function Nuevos ({productos}){              //productos nuevos
    var arr = productos.filter(e =>{
        return (e.condition === "new")
    })
    if(arr.length === 0){
        return (
            <div style={{display: "flex", height: "100vh", width:"100%", justifyContent: "center", alignItems: "center"}}>
                <h2>No hay productos nuevos</h2>
            </div>
            )
    }
    return (
        <Catalogo productos={arr}/>
    )
}

export function Usados ({productos}){              //productos usados

    var arr = productos.filter(e =>{
        return (e.condition === "used")
    })

    if(arr.length === 0){
        return (
        <div style={{display: "flex", height: "100vh", width:"100%", justifyContent: "center", alignItems: "center"}}>
            <h2>No hay productos usados</h2>
        </div>
        )
    }
    return (
        <Catalogo productos={arr}/>
    )
}

