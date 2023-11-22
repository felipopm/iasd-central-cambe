import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sobre.module.css'

function Sobre() {
    return(
        <>
            <Header />
            <Container>
                <section >

                    <h1>Sobre</h1>

                    <section className={styles.endereco}>
                        <h2>Igreja Adventista do Sétimo dia Central de Cambé</h2>
                        <h3>R. Bélgica, 1749 - Centro, Cambé - PR, 86181-080 </h3>
                        <h3>Próximo ao Centro Cultural de Cambé</h3>
                    </section>

                    <section className={styles.midias}>
                        <h3>Midias sociais</h3>
                        <div className={styles.midia}>
                            <a href="https://www.instagram.com/iasdcentraldecambe/">Instagram</a>
                            <a href="https://www.facebook.com">Facebook</a>
                            <a href="https://www.youtube.com">Youtube</a>
                        </div>

                    </section>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Sobre