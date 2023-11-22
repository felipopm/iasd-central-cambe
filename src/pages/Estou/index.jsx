import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Estou.module.css'

function Farol(){
    return(
        <>
            <Header />
            <Container>
                <h2 className={styles.titulo}>Estou</h2>
                
            </Container>
            <Footer />
        </>
        
    );
}

export default Farol