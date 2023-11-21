import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Farol.module.css'
import videos from "../../json/db.json";
import PropTypes from "prop-types";

// Componente de Vídeo
const VideoItem = ({ video, index }) => (
    <li key={index}>
        <a href={video.url} target="_blank" rel="noopener noreferrer">
            <img src={video.cover} alt="Capa" />
        </a>
        <div>
            <h3>{video.title}</h3>
            <p>{video.assunto} | {video.category}</p>
        </div>
    </li>
);

VideoItem.propTypes = {
    video: PropTypes.shape({
        url: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        assunto: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

function Farol(){

    // Filtrar por categoria "Farol"
    const farolAssuntos = videos.filter(item => item.category === "Farol").map(
        (video, index) =>
            <VideoItem key={index} video={video} index={index} />
    );

    return(
        <>
            <Header />
            <Container>   
                <section className={styles.temas}>
                    
                    <h2>Farol</h2>
                    <ul>{farolAssuntos}</ul>

                </section>
            </Container>
            <Footer />
        </>
        
    );
}

export default Farol