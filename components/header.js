import styles from '../styles/Home.module.css'
import Link from "next/link"


// Preguntar porque ponerlo entre corchete
function Header({ filterText, setFilterText, active }) {
    const handleChange = (e) => {
        setFilterText(e.target.value);
    }

    return (
        <div className={styles.header}>
            <Link href={"/"}>
                <h1 className={styles.h1title}>Fake Store</h1>
            </Link>
            <input
                type="text"
                value={filterText.filterText}
                placeholder="Buscando..."
                className={styles.search}
                onChange={handleChange}
                disabled={active}
            />

        </div>
    )
}

export default Header


