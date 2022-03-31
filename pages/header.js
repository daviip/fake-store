import styles from '../styles/Home.module.css'


// Preguntar porque ponerlo entre corchete
function Header({filterText, setFilterText}) {
        const handleChange = (e) => {
            setFilterText(e.target.value);
        }
        
return (
    <div className={ styles.header }>
        <h1 className={ styles.h1title }>Fake Store</h1>
        <input 
        type="text" 
        value={filterText.filterText} 
        placeholder="Buscando..."         
        className={ styles.search }
        onChange={handleChange} 
        />

    </div>
    )
}

export default Header


