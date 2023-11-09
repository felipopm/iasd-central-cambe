import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Estou.module.css'

function Farol(){
    return(
        <>
            <Header />
            <Container>
                <h1 className={styles.titulo}>Estou</h1>
                
            </Container>
            <Footer />
        </>
        
    );
}

export default Farol