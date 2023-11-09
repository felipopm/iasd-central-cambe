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
                    <h3>VOLTA DE JESUS</h3>        
                    <Abordagem />
                    <h3>APOCALIPSE</h3>
                    <Abordagem />
                    <h3>POLÍTICA</h3>
                    <Abordagem />
                    <h3>CULTURA</h3>
                    <Abordagem />
                    <h3>RELIGIÃO</h3>
                    <Abordagem />
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Sentinela