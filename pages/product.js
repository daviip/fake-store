import Header from "../components/header"
import styles from "../styles/Product.module.css"
import Image from "next/image"


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
                    <p className={styles.imgP}><Image src={data.image} width="200px" alt={data.title}/></p>
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
    const res = await fetch('https://fakestoreapi.com/products/' + id)
    const data = await res.json()
    return { props: { data, id } }
  }