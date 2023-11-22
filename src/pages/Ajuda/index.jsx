import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from "./Ajude.module.css"

function Ajuda() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.ajuda}>
                    <h2>Ajuda</h2>
                    <section className={styles.contatos}>
                        <div className={styles.emergencia}>
                            <h3>Telefones para emergências</h3>
                            <p>ACESF – Administração de Cemitérios e Serviços Funerários de Londrina	(43)3323-7275</p>
                            <p>Ambulância / SAMU	192</p>
                            <p>Bombeiros / SIATE	193</p>
                            <p>Defesa Civil	199</p>
                            <p>Delegacia da Mulher	3322-1633</p>
                            <p>Disque-Denúncia (Polícia Civil)	197</p>
                            <p>Disque-Denúncia (Polícia Militar)	181</p>
                            <p>Guarda Municipal	153</p>
                            <p>Polícia Civil	147</p>
                            <p>Polícia Federal	194</p>
                            <p>Polícia Militar /Radiopatrulha /Trânsito	190</p>
                            <p>Polícia Rodoviária	(43)3378-1900</p>
                        </div>
                        <div className={styles.divulga}>
                            <h3>Telefones de meios de divulgação</h3>
                            <p>Rádio novo tempo Londrina (43) 99875-0009</p>
                        </div>
                        <div className={styles.pastoral}>
                            <h3>Ajuda pastoral</h3>
                            <p>Pr. Darlei</p>
                        </div>
                    </section>
                </section>

            </Container>
            <Footer />
        </>
    );
}

export default Ajuda