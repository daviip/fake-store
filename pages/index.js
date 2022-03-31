import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Encabezado from './encabezado'
import Listado from './listado'

export default function Home() {
  const [filtroTexto, setFiltroTexto] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Fake Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Encabezado 
          filtroTexto={filtroTexto}
          setFiltroTexto={setFiltroTexto}
        />
        <Listado filtroTexto={filtroTexto} />
        
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
