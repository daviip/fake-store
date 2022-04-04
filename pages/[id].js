import { url } from "./constants"
import Header from "../components/header"
import styles from "../styles/Product.module.css"


export default function Product({data, id}) {
        
    if (!data) {
        return <div>loading...</div>
    } else {
        return (
            <div>
                <Header
                    filterText={""}
                    setFilterText={""}
                    active={true}
                />
                <div className={styles.pages}>
                    <h2 className={styles.titleP}>{data.title}</h2>
                    <p className={styles.imgP}><img src={data.image} width="200px" /></p>
                    <p className={styles.priceP}>{data.price}€</p>
                    <h3>Description</h3>
                    <span className={styles.descriptionP}>{data.description}</span>
                </div>
            </div>
        )
    }
}

export async function getServerSideProps(context){
    const {params} = context
    const {id} = params
    console.log(id)
    const res = await fetch(url + '/products/' + id)
    const data = await res.json()
    return { props: { data, id } }
  }