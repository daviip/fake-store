import { useEffect, useState } from "react";
import { url } from './api/hello';
import SearchBar from "./busqueda";
import styles from '../styles/Home.module.css'
import Producto from "./tablaproducto";


function Listado(filtroTexto) {

    const [productos, setProductos] = useState([]);
    const rows = [];

    const cargaProductos = () => {
        fetch(url + "/products")
            .then(res => res.json())
            .then(data => setProductos(data))
    }

    productos.forEach((producto) => {
        if(producto.title.toLowerCase().indexOf(filtroTexto.filtroTexto) === -1){
            return;
        }else{
            //Salta error por no tener key
            rows.push(producto);
        }
    })

    useEffect(() => {
        cargaProductos();
    }, []);

return <div className={ styles.listado }>
            <h3>Listado productos</h3>
            <div className={styles.tabla}>
            {
                    rows.map((producto) =>
                        <Producto producto={producto} />
                    )
            }
            </div>
        </div>
}

export default Listado

