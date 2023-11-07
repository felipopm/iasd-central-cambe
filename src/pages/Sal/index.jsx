import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sal.module.css'

function Sal(){
    return(
        <>
            <Header />
            <Container>
                <h1>Sal</h1>
                <section className={styles.temas}>
                    <button>MÚSICA</button>
                    <button>RELACIONAMENTOS</button>
                    <button>AMOR</button>
                    <button>MINHA MELHOR VERSÃO?</button>
                    <button>?</button>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Sal