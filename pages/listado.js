import { useEffect, useState } from "react";
import { url } from './api/hello';
import styles from '../styles/Home.module.css'

// Preguntar porque ponerlo sin corchete
function Listado(filtroTexto) {

    const [productos, setProductos] = useState([]);
    const rows = [];

    const cargaProductos = () => {
        fetch(url + "/products")
            .then(res => res.json())
            .then(data => setProductos(data))
    }

    productos.forEach((producto) => {
        if(producto.title.toLowerCase().indexOf(filtroTexto.filtroTexto.toLowerCase()) === -1){
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
            <h2>Listado productos</h2>
            <div className={styles.tabla}>
            {
                    rows.map((producto) =>
                        <div key={ producto.id } className={ styles.producto } >
                                <p className={ styles.cen } ><img src={ producto.image } width="100px" /></p>
                                <p className={ styles.cen } >{ producto.title }</p>
                                <p className={ styles.cen } >{ producto.price }€</p>
                        </div>
                    )
            }
            </div>
        </div>
}

export default Listado

