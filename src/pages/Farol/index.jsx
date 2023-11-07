import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Farol.module.css'

function Farol(){
    return(
        <>
            <Header />
            <Container>
                <h1>Farol</h1>
                <section className={styles.temas}>
                    <button>PROFISSÃO/ EMPREGO</button>
                    <button>SUICÍDIO</button>
                    <button>QUAL É A VERDADE?</button>
                    <button>PERDI TUDO, E AGORA?</button>
                    <button>?</button>
                </section>
            </Container>
            <Footer />
        </>
        
    );
}

export default Farol