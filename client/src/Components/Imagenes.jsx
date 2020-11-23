import React, { useEffect,useState } from 'react';
import axios from 'axios';
import img1 from '../Imagenes/aveIcono.png';
import img2 from '../Imagenes/conejoPrincipal.png';
import img3 from '../Imagenes/gatitoIcono.png';
import img4 from '../Imagenes/pecesPrincipal.png';
import img5 from '../Imagenes/perrooIcono.png';
import img6 from '../Imagenes/perroYgato.png';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'
import '../Estilos/Carousel.css'

export default function Producto({id}){
    const [producto, setProducto] = useState([]);
    

    useEffect(()=>{
        axios.get(`http://localhost:3001/api/product?q=${id}`)
        .then(resp =>{
            // console.log(resp.data)
            return setProducto(resp.data)
        })
        .then (resp =>{
            var elems = document.querySelectorAll('.carousel');
            M.Carousel.init(elems, {
            duration: 30,
            shift: 5,
            dist: -80,
            padding: 5,
            numVisible: 5, 
            indicators: true,
            noWrap: false
         })
        }
            
        )
    }, []);

    // useEffect (() => {
    //     var elems = document.querySelectorAll('.carousel');
    //     var intance = M.Carousel.init(elems, {
    //         duration: 50,
    //         shift: 5,
    //         dist: -80,
    //         padding: 5,
    //         numVisible: 5, 
    //         indicators: true,
    //         noWrap: false
    //     });
        
    // }, []);
   
    
    var imag = producto.imagenes;
    
    return (
        <div class="valign-wrapper"style={{height: "100vh", display: "flex", justifyContent: "center"}}>
        <div class="carousel center-align" style={{backgroundColor: "#00000085"}} >
            <div style={{marginTop: "15px"}}>
                <h2 >{producto.title}</h2>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <h5 >{producto.currency}</h5>
                    <h3 >${producto.price}</h3>
                </div>
            </div>
            {
                imag && imag.map(e =>{
                    return (
                <a class="carousel-item" style={{marginTop: "30px"}}  href="#">
                <img src={e} /> 
                </a>)
                })
            }
        </div>
        </div>
    )
}