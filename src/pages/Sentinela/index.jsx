import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sentinela.module.css'
import { useState } from "react";
import VideoItem from "../../components/Card";
import videos from "../../json/db.json";

function Sentinela() {

    // Filtrar por categoria "Sentinela"
    const sentinelaAssuntos = videos.filter((item) => item.category === "Sentinela").map((video, index) => <VideoItem key={index} video={video} index={index} />
    );

    const [semAbordagem, setSemAbordagem] = useState(true)
    const toggleAbordagem = () => { setSemAbordagem(!semAbordagem) }

    // const [ semSuperficial, setSemSuperficial ] = useState(true)
    // const toggleSuperficial = () => { setSemSuperficial(!semSuperficial) }
    // const [ semProfundo, setSemProfundo ] = useState(true)
    // const toggleProfundo = () => { setSemProfundo (!semProfundo) }

    return (
        <>
            <Header />
            <Container>
                <section className={styles.sentinela}>

                    <div className={styles.comabordagem}>
                        <button className={styles.superficial}>Superficial</button>
                        <button className={styles.profundo}>Profundo</button>
                    </div>

                    <span className={`${styles.abordagem}`} onClick={toggleAbordagem}>V</span>

                    <h2>Sentinela</h2>
                    <div className={styles.assuntos}>       
                        {sentinelaAssuntos}
                    </div>


                    {/* <div className={`${styles.comabordagem} ${semAbordagem ? styles.semabordagem : ''}`}>
                        {assuntos.map((assunto, index) =>
                            // eslint-disable-next-line react/jsx-key
                            <Assunto assunto={assunto}>
                                {filterAssunto(index).map((video) => <Card id={video.id} key={video.id} title={video.title} />)}
                            </Assunto>
                        )}
                    </div>

                    {children} */}

                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Sentinela;