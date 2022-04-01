import { useEffect, useState } from "react";
import { url } from "./constants";
import styles from '../styles/Home.module.css'
import useSWR from 'swr'



const fetcher = (...args) => fetch(...args).then(res => res.json())

function List (filterText) {
  const { data, error } = useSWR(url + "/products", fetcher)
  const rows = []

  if (error) return <div>failed to load</div>
  if (!data){
      return <div>loading...</div>
  }else{
    data.forEach((product) => {
        if(product.title.toLowerCase().indexOf(filterText.filterText.toLowerCase()) === -1){
            return;
        }else{
            //Salta error por no tener key
            rows.push(product);
        }
    })
  }

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