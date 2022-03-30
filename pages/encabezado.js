import styles from '../styles/Home.module.css'

function Encabezado() {
    return <div className={ styles.header }>
        <h1 className={ styles.titulo }>Fake Store</h1>
        <input className={ styles.buscador } type="text" value={filterText} placeholder="Buscando..."/>
    </div>

}

export default Encabezado


