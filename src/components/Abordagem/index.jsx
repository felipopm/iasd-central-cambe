// import { useState } from "react";
import styles from "./Abordagem.module.css"
import Card from "../Card";
import Assunto, { assuntos, filterAssunto } from "../Assunto";

// eslint-disable-next-line react/prop-types
function Abordagem({ children }) {

    // const [ semAbordagem, setSemAbordagem ] = useState(true)
    // const toggleAbordagem = () => { setSemAbordagem(!semAbordagem) }

    // const [ semSuperficial, setSemSuperficial ] = useState(true)
    // const toggleSuperficial = () => { setSemSuperficial(!semSuperficial) }

    // const [ semProfundo, setSemProfundo ] = useState(true)
    // const toggleProfundo = () => { setSemProfundo (!semProfundo) }

    return(
        <section className={styles.tema}>
            {/* <h3>Volta de Jesus</h3> */}
            

            <div className={styles.comabordagem}>
                <button className={styles.superficial}>Superficial</button>
                <button className={styles.profundo}>Profundo</button>
            </div>

            {/* <Assunto assunto={assuntos[0]}>
                { filterAssunto(0).map((video) => <Card id={video.id} key={video.id} title={video.title} />)}
            </Assunto> */}




            { assuntos.map((assunto, index) =>
                // eslint-disable-next-line react/jsx-key
                <Assunto assunto={assunto}>
                    { filterAssunto(index).map((video) => <Card id={video.id} key={video.id} title={video.title} />)}
                </Assunto>
            )}



            {/* <div className={`${styles.comprofundo} ${ semProfundo ? styles.semprofundo : ''}`}> 
                { 
                    videos.map((video) => <Card id={video.id} key={video.id} title={video.title} />)
                }
            </div> */}

            { children }

        </section>
    );
}

export default Abordagem