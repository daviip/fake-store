import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Header from './header'
import List from './list'

export default function Home() {
  const [filterText, setFilterText] = useState('');

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
        />
        <List filterText={filterText} />
        
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
