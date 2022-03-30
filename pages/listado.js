import { useEffect, useState } from "react";
import { url } from './api/hello';
import SearchBar from "./busqueda";
import styles from '../styles/Home.module.css'


function Listado() {

    const [productos, setProductos] = useState([]);
    const [filtroTexto, setFiltroTexto] = useState('');
    const rows = [];

    <SearchBar 
    filtroTexto={filtroTexto}
    onFiltroTextoCambio={setFiltroTexto}
    />

    const cargaProductos = () => {
        fetch(url + "/products")
            .then(res => res.json())
            .then(data => setProductos(data))
    }

    useEffect(() => {
        cargaProductos();
    }, []);

return <div className={ styles.listado }>
        <h3>Listado productos</h3>

        {
                    productos.map((producto) =>
                        <div key={ producto.id } className={ styles.producto } >
                                <p><img src={ producto.image } width="100px" /></p>
                                <p>{ producto.title }</p>
                                <p>{ producto.price }€</p>
                        </div>
                    )
        }
        
        {/* <table>
        <tbody>
            <tr>
                {
                    productos.map((producto) =>
                            <td key={ producto.id }>
                                <p><img src={ producto.image } width="100px" /></p>
                                <p>{ producto.title }</p>
                                <p>{ producto.price }€</p>
                            </td>
                    )
                }
                </tr>
                </tbody>
        </table> */}
    </div>

}

export default Listado

