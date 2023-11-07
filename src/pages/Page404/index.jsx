import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import styles from './Page404.module.css'

function Page404() {
    return(
        <>
            <Header />
            <Container>
                <section>
                    <h2 className={styles.texto2}>A página não foi encontrada</h2>
                    <div>
                        <span className={styles.erro}>Erro 404</span> <br />
                        <strong className={styles.interrogacao}>?</strong>
                    </div>  
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Page404