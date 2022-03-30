import { useEffect, useState } from "react";
import { url } from './api/hello';

function Listado() {

    const [productos, setProductos] = useState([]);

    const cargaProductos = () => {
        fetch(url + "/products")
            .then(res => res.json())
            .then(data => setProductos(data))
    }

    useEffect(() => {
        cargaProductos();
    }, []);

    return <div>
        <h3>Listado productos</h3>
        <table>
        <tbody>
                {
                    productos.map((producto) =>
                        <tr>
                            <td key={ producto.id }>
                                <p><img src={ producto.image } width="100px" /></p>
                                <p>{ producto.title }</p>
                                <p>{ producto.price }€</p>
                            </td>
                        </tr>
                    )
                }
                </tbody>
        </table>
    </div>

}

export default Listado

