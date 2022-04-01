import { useEffect, useState } from "react";
import { url } from "./constants";
import styles from '../styles/Home.module.css'

// Preguntar porque ponerlo sin corchete
function List(filterText) {
    const [products, setProducts] = useState('')
    const [isLoading, setLoading] = useState(false)
    const rows = []

    useEffect(() => {
        setLoading(true)
        fetch(url + "/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
            setLoading(false)
        })
    }, [])
  
    if(products){
        products.forEach((product) => {
            if(product.title.toLowerCase().indexOf(filterText.filterText.toLowerCase()) === -1){
                return;
            }else{
                //Salta error por no tener key
                rows.push(product);
            }
        })
    }else{
        <p>No data</p>
    }
    
    if(isLoading) return <p>Loading...</p>

return <div className={ styles.listing }>
            <h2>Listado Productos</h2>
            <div className={styles.table}>
            {
                    rows.map((product) =>
                        <div key={ product.id } className={ styles.product } >
                                <p className={ styles.img } ><img src={ product.image } width="100px" /></p>
                                <p className={ styles.title } >{ product.title }</p>
                                <p className={ styles.price } >{ product.price }€</p>
                        </div>
                    )
            }
            </div>
        </div>
}

export default List

