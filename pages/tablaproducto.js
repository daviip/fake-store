import styles from '../styles/Home.module.css'

const Producto = (producto) =>{
    return(
        <div key={ producto.producto.id } className={ styles.producto } >
                                <p><img src={ producto.producto.image } width="100px" /></p>
                                <p>{ producto.producto.title }</p>
                                <p>{ producto.producto.price }€</p>
                        </div>
    )
}

export default Producto