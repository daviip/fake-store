import { useRouter } from "next/router"
import { url } from "./constants"
import useSWR from "swr"
import Header from "./header"
import styles from "../styles/Product.module.css"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Product(filterText) {
    const router = useRouter()
    const { id } = router.query
    console.log(id)
    const { data, error } = useSWR(url + "/products/" + id, fetcher)
    const active = true

    if (error) return <div>failed to load</div>
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