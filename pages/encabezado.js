import { useState } from 'react'
import styles from '../styles/Home.module.css'
import SearchBar from './busqueda'

function Encabezado() {
    const [filtroTexto, setFiltroTexto] = useState('');

    
    return <div className={ styles.header }>
        <h1 className={ styles.titulo }>Fake Store</h1>
        <SearchBar 
        filtroTexto={filtroTexto}
        onFiltroTextoCambio={setFiltroTexto}
        />


    </div>

}

export default Encabezado


