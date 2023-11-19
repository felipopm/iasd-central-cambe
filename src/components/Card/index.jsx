import styles from "./Card.module.css";

// eslint-disable-next-line react/prop-types
function Card({ id, title }) {
    return(
        <section className={styles.card}>
            <a className={styles.link}
                href={`https://www.youtube.com/watch?v=${id}`}
                rel="noreferrer noopener"
                target="_blank">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
            </a>
            <h3 className={styles.titulo}>{title}</h3>
        </section>
    );
}

export default Card;