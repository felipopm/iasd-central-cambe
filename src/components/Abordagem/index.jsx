import { useState } from "react";
import styles from "./Abordagem.module.css"

// eslint-disable-next-line react/prop-types
function Abordagem({ children }) {

    const [ semAbordagem, setSemAbordagem ] = useState(true)
    const toggleAbordagem = () => {
        setSemAbordagem(!semAbordagem)
    }
    
    const [ semAssunto, setSemAssunto ] = useState(true)
    const toggleAssunto = () => {
        setSemAssunto(!semAssunto)
    }

    return(
        <section className={styles.abordagem}>
            <span 
                className={`${styles.tema} ${ !semAssunto ? styles.semassunto : ''}`}
                onClick={toggleAbordagem}
            >V</span>

            <div 
                className={`${styles.comabordagem} ${ semAbordagem ? styles.semabordagem : ''}`}
            >
                <button className={styles.superficial} onClick={toggleAssunto}>Superficial</button>
                <button className={styles.profundo}>Profundo</button>
            </div>

            <div className={`${styles.comassunto} ${ semAssunto ? styles.semassunto : ''}`}>
                <div>
                    <iframe width="300" height="172" src="https://www.youtube.com/embed/K94FqvRf2bU?si=zmPrK2BYH-4p0BRK&amp;start=2460" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h4>Paulo em Romanos 3, está anulando a Lei mediante a fé?</h4>
                </div>
                <div>
                    <iframe width="300" height="172" src="https://www.youtube.com/embed/Jd36eMeNDao?si=PHcQxFs_2xYKPHrf&amp;start=1332" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h4>Podemos acreditar que não houveram alterações nos textos bíblicos até hoje?</h4>
                </div>
            </div>

            { children }

        </section>
    );
}

export default Abordagem