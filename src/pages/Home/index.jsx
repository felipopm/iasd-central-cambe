import { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container';
import styles from './Home.module.css'

function Home() {

  const [link, setLink] = useState('');
  const [titulo, setTitulo] = useState('');
  const [assunto, setAssunto] = useState('');

  const handleAdicionarConteudo = () => {
    // Simulando a adição de novo conteúdo ao estado local
    const novoConteudo = { link, titulo, assunto, };
    // Adicionando o novo conteúdo à lista de conteúdos (simulação)
    // Esta é uma abordagem bastante simplificada e não persistente
    // No mundo real, você precisaria enviar esses dados para um servidor back-end
    // que manipularia a adição do conteúdo ao arquivo JSON.
    console.log('Novo Conteúdo:', novoConteudo);

    // Limpa os campos do formulário
    setLink('');
    setTitulo('');
    setAssunto('');
  };

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

            <form 
              className={styles.formulario} 
              action="/submit" 
              method='post'
              onSubmit={(e) => {
                e.preventDefault();
                handleAdicionarConteudo();
              }}
            >
              <input 
                type="text" 
                placeholder='Link do conteúdo' 
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <input 
                type="text" 
                placeholder='Titulo do conteúdo'
                value={titulo} 
                onChange={(e) => setTitulo(e.target.value)}
              />
              <div>
                <label htmlFor="assunto">Assunto:</label>
                <select 
                  name="assunto" 
                  id="assunto"
                  value={titulo} 
                  onChange={(e) => setAssunto(e.target.value)}
                >
                  <option value="Volta de Jesus">Volta de Jesus</option>
                  <option value="Apocalipse">Apocalipse</option>
                  <option value="Política">Política</option>
                  <option value="Cultura">Cultura</option>
                  <option value="Religião">Religião</option>
                  <option value="Profissão">Profissão</option>
                  <option value="Suicídio">Suicídio</option>
                  <option value="Verdade">Verdade</option>
                  <option value="Perdido">Perdido</option>
                  <option value="Música">Música</option>
                  <option value="Relacionamento">Relacionamento</option>
                  <option value="Amor">Amor</option>
                  <option value="Crescimento">Crescimento</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <button type='submit'>Adicionar conteúdo</button>
            </form>

            <div>
              Conteúdo adicionado recentemente
            </div>
          </div>

        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home