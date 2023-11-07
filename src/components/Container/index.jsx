import styles from './Container.module.css'

// eslint-disable-next-line react/prop-types
function Container({ children }) {
    return(
        <section className={styles.container}>
            <div className={styles.pesquisa}>
              <input className={styles.pergunte}
              type="search" 
              placeholder='Pergunte algo?' />
            </div>

            { children }
            
        </section>
    );
}

export default Container