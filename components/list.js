import styles from '../styles/Home.module.css'
import Link from "next/link";



function List({filterText, data}) {
    const rows = []

    if(data){
        data.forEach((product) => {
            if (product.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            } else {
                //Salta error por no tener key
                rows.push(product);
            }
        })
    }
    
    return <div className={styles.listing}>
        <h2>List of Products</h2>
        <div className={styles.table}>
            {
                rows.map((product) =>
                    <Link 
                    href="/[id]" 
                    as={`/${product.id}`}
                    >
                        <div key={product.id} className={styles.product} >
                            <p className={styles.img} ><img src={product.image} width="100px" /></p>
                            <p className={styles.title} >{product.title}</p>
                            <p className={styles.price} >{product.price}€</p>
                        </div>
                    </Link>
                )
            }
        </div>
    </div>

}






export default List