import React, {useState} from 'react';
import ProductCard from './ProductCard';
import estilo from '../Estilos/Catalogo.module.css';
import Pagination from './Paginacion';

export default function Catalogo({productos, loading}){

    const [pagina, setPagina] = useState(1)  //el numero de las paginas, empieza en 1
    const products = 32;                      // productos q van a ver por pagina

    const final = pagina * products;
    const principio = final - products;
    const arrayProductos = productos.slice(principio, final);

    function proximaPagina(number) {
        setPagina(number)
    }

    var condicion = () => {
        if (loading === true){
            return (
                <div style={{display: "flex", height: "500px", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <div>
                        <h4>Cargando...</h4>
                    </div>
                    <div>
                        <div class="spinner-grow" role="status" style={{margin: "10px"}}>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow" role="status" style={{margin: "10px"}}>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow" role="status" style={{margin: "10px"}}>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow" role="status" style={{margin: "10px"}}>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            )
        }
        else if(productos.length === 0){
            return (<h4>No hay productos</h4>)
        }
        else return (
            <div>
                <div className={estilo.display}>
                    {arrayProductos.map (p => {
                        return (
                        <ProductCard 
                            id={p.id}
                            image={p.image}
                            title={p.title}
                            price={p.price}
                            stock={p.stock}
                            sold={p.sold}
                            condition={p.condition}
                        />
                        )
                    })}
                </div>
                <div style={{ display: "flex", justifyContent:"center", margin: "30px" }}>
                    <Pagination totalProductos={productos} paginas={proximaPagina} productPorPagina={products} />
                </div>
            </div>
        )
    }

    return (
        <div>
            {condicion()}   
        </div>
    )
}