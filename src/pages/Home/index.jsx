import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container';
import styles from './Home.module.css'

function Home(){
    return(
        <>
        <Header />
        <Container>
          <section className={styles.home}>
            {/* <div className='perguntas'>
              <h1>Qual é o propósito da vida segundo Deus?</h1>
              <h1>Existe inferno?</h1>
              <h1>Deus existe?</h1>
              <h1>Se Deus existe porque existe dor?</h1>
              <h1>Se Deus existe porque existe dor?</h1>
              <h1>Quem são os adventista?</h1>
              <h1>Como ter um relacionamento com Deus?</h1>
              <h1>Quem é Deus?</h1>
            </div> */}
            <div className={styles.pesquisa}>
              <input type="search" placeholder='Pergunte algo?' />
            </div>
          </section>
        </Container>
        <Footer />
      </>
    );
}

export default Home