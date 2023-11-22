import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Farol.module.css'
import VideoItem from "../../components/Card";
import videos from "../../json/db.json";

function Farol(){

    // Filtrar por categoria "Farol"
    const farolAssuntos = videos.filter((item) => item.category === "Farol").map((video, index) => <VideoItem key={index} video={video} index={index} />
    );

    return(
        <>
            <Header />
            <Container>   
                <section className={styles.farol}>
                    
                    <h2>Farol</h2>
                    <div className={styles.assuntos}>
                        {farolAssuntos}
                    </div>

                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Farol