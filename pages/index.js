import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import List from '../components/list'


export default function Home({data}) {
  const [filterText, setFilterText] = useState('');
  const active = false;

  return (

     <div className={styles.container}>
      <Head>
        <title>Fake Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          filterText={filterText}
          setFilterText={setFilterText}
          active={active}
        />
        <List 
        filterText={filterText}
        data={data}
         />
      </main> 
    </div>
  )
}

export async function getServerSideProps(context){
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return { props: { data } }
}