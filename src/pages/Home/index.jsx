import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container';
import styles from './Home.module.css'

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>

          <div className={styles.noticias}>
            <h3>Notícias</h3>
          </div>

          <div className={styles.novo}>
            <h3>Novo</h3>
            <div>
              Conteúdo
            </div>
          </div>

        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home