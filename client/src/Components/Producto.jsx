import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Estilos/Carousel.css'
import M from 'materialize-css'
import img1 from '../Imagenes/aveIcono.png';
import img2 from '../Imagenes/conejoPrincipal.png';
import img3 from '../Imagenes/gatitoIcono.png';
import img4 from '../Imagenes/pecesPrincipal.png';
import img5 from '../Imagenes/perrooIcono.png';
import img6 from '../Imagenes/perroYgato.png';

export default function Producto({id}){
    const [producto, setProducto] = useState();
    console.log(producto)
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/product?q=${id}`)
        .then(resp =>
            // console.log(resp.data)
            setProducto(resp.data)
        )
    })

    useEffect (() => {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            duration: 50,
            shift: 5,
            dist: -80,
            padding: 5,
            numVisible: 5, 
            indicators: true,
            noWrap: false
        });
    })

    return (
        // <div>
           
            <div class="carousel center-align" >
            <a class="carousel-item"  href="#one!">
                <img src={img1} />
            </a>
            <a class="carousel-item"  href="#two!">
                <img src={img2} />
            </a>
            <a class="carousel-item"  href="#three!">
                <img src={img3} />
            </a>
            <a class="carousel-item"  href="#four!">
                <img src={img4} />
            </a>
            <a class="carousel-item"  href="#five!">
                <img src={img5} />
            </a>
            {/* <a class="carousel-item" href="#one!"><img src="https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg"/></a>
            <a class="carousel-item" href="#two!"><img src="https://www.vuelaviajes.com/wp-content/2017/05/Parque-Nacional-Banff1.jpg"/></a>
            <a class="carousel-item" href="#three!"><img src="https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled.jpg"/></a>
            <a class="carousel-item" href="#four!"><img src="https://fondosmil.com/fondo/11112.jpg"/></a>
            <a class="carousel-item" href="#five!"><img src="https://fondospress.files.wordpress.com/2010/06/paraiso-1024x768.jpg"/></a> */}
        </div>

        // </div>
    )
}