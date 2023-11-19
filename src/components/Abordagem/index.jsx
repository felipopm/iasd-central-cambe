import { useState } from "react";
import styles from "./Abordagem.module.css"
import Card from "../Card";
import videos from "../../json/db.json";

// eslint-disable-next-line react/prop-types
function Abordagem({ children }) {

    const [ semAbordagem, setSemAbordagem ] = useState(true)
    const toggleAbordagem = () => { setSemAbordagem(!semAbordagem) }

    const [ semSuperficial, setSemSuperficial ] = useState(true)
    const toggleSuperficial = () => { setSemSuperficial(!semSuperficial) }

    const [ semProfundo, setSemProfundo ] = useState(true)
    const toggleProfundo = () => { setSemProfundo (!semProfundo) }

    return(
        <section className={styles.tema}>
            <span className={`${styles.abordagem}`} onClick={toggleAbordagem}>V</span>

            <div className={`${styles.comabordagem} ${ semAbordagem ? styles.semabordagem : ''}`}>
                <button className={styles.superficial} onClick={toggleSuperficial}>Superficial</button>
                <button className={styles.profundo} onClick={toggleProfundo}>Profundo</button>
            </div>

            <div className={`${styles.comsuperficial} ${ semSuperficial ? styles.semsuperficial : ''}`}> 
                { 
                    videos.map((video) => <Card id={video.id} key={video.id} title={video.title} />)
                }
            </div>

            <div className={`${styles.comprofundo} ${ semProfundo ? styles.semprofundo : ''}`}> 
                { 
                    videos.map((video) => <Card id={video.id} key={video.id} title={video.title} />)
                }
            </div>

            { children }

        </section>
    );
}

export default Abordagem