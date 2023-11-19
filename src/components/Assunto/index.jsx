import { useState } from "react";
import videos from "../../json/db.json"
import styles from "./Assunto.module.css";

// eslint-disable-next-line react-refresh/only-export-components
export const assuntos = [
    "Volta de Jesus",
    "Apocalipse",
    "Política",
    "Cultura",
    "Religião"
]

// eslint-disable-next-line react-refresh/only-export-components
export function filterAssunto(id){
    return videos.filter( video => video.assunto === assuntos[id] )
}



// eslint-disable-next-line react/prop-types
function Assunto({ assunto, children }){

    const [ semAbordagem, setSemAbordagem ] = useState(true)
    const toggleAbordagem = () => { setSemAbordagem(!semAbordagem) }

    return(
        <section className={styles.assunto}>
            <h3>{assunto}</h3>
            
            <span className={`${styles.abordagem}`} onClick={toggleAbordagem}>V</span>

            <div>
                { children }
            </div>
        </section>
    );
}

export default Assunto;