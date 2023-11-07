import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sentinela.module.css'

function Sentinela(){
    return(
        <>
            <Header />
            <Container>
                <h1>Sentinela</h1>
                <section className={styles.temas}>
                    <button>VOLTA DE JESUS</button>
                    <button>APOCALIPSE</button>
                    <button>POLÍTICA</button>
                    <button>CULTURA</button>
                    <button>RELIGIÃO</button>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Sentinela