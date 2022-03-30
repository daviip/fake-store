import styles from '../styles/Home.module.css'

function SearchBar({filtroTexto,onFiltroTextoCambio}){
    
return(
    <input 
        type="text" 
        value={filtroTexto} placeholder="Buscando..." 
        className={ styles.buscador } 
        onChange={(e) => onFiltroTextoCambio(e.target.value)} />
)
}

export default SearchBar