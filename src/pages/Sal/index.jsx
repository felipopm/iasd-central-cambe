import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sal.module.css'
import VideoItem from "../../components/Card";
import videos from "../../json/db.json";

function Sal(){

    // Filtrar por categoria "Sentinela"
    const salAssuntos = videos.filter((item) => item.category === "Sal").map((video, index) => <VideoItem key={index} video={video} index={index} />
    );

    return(
        <>
            <Header />
            <Container>
                <section className={styles.sal}>

                    <h2>Sal</h2>
                    <div className={styles.assuntos}>
                        {salAssuntos}
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Sal