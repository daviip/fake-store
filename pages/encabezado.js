import styles from '../styles/Home.module.css'


// Preguntar porque ponerlo entre corchete
function Encabezado({filtroTexto, setFiltroTexto}) {
        const handleChange = (e) => {
            setFiltroTexto(e.target.value);
        }
        
return (
    <div className={ styles.header }>
        <h1 className={ styles.titulo }>Fake Store</h1>
        <input 
        type="text" 
        value={filtroTexto.filtroTexto} 
        placeholder="Buscando..."         
        className={ styles.buscador }
        onChange={handleChange} 
        />

    </div>
    )
}

export default Encabezado


