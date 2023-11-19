import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from './Sentinela.module.css'
import Abordagem from "../../components/Abordagem";
// import { useState } from "react";

function Sentinela(){

    return(
        <>
            <Header />
            <Container>
                <section className={styles.temas}>
                            
                    <Abordagem />
                    {/* <h3>Apocalipse</h3>
                    <Abordagem />
                    <h3>Política</h3>
                    <Abordagem />
                    <h3>Cultura</h3>
                    <Abordagem />
                    <h3>Religião</h3>
                    <Abordagem /> */}
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Sentinela