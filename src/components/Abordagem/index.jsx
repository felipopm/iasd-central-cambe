import { useState } from "react";
import styles from "./Abordagem.module.css"

// eslint-disable-next-line react/prop-types
function Abordagem({ children }) {

    const [ semAbordagem, setSemAbordagem ] = useState(true)
    const toggleMenu = () => {
        setSemAbordagem(!semAbordagem)
    }

    return(
        <section className={styles.abordagem}>
            <span 
            className={styles.tema}
            onClick={toggleMenu}
            >V</span>
            <div 
            className={`${styles.comabordagem} ${ semAbordagem ? styles.semabordagem : ''}`}
            >
                <button className={styles.superficial}>Superficial</button>
                <button className={styles.profundo}>Profundo</button>
            </div>
            { children }
        </section>
    );
}

export default Abordagem