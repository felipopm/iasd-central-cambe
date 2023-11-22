// import styles from "./Card.module.css";

// // eslint-disable-next-line react/prop-types
// function Card({ id, title }) {
//     return(
//         <section className={styles.card}>
//             <a className={styles.link}
//                 href={`https://www.youtube.com/watch?v=${id}`}
//                 rel="noreferrer noopener"
//                 target="_blank">
//                 <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
//             </a>
//             <h3 className={styles.titulo}>{title}</h3>
//         </section>
//     );
// }

// export default Card;



// VideoItem.jsx
import PropTypes from "prop-types";
import styles from "./Card.module.css"

const VideoItem = ({ video, index }) => (
  <div className={styles.assuntos} key={index}>
    <a className={styles.link} href={video.url} target="_blank" rel="noopener noreferrer"> <img src={video.cover} alt="Capa" />
    </a>
      <h3 className={styles.titulo}>{video.title}</h3>
      <p>{video.assunto} | {video.category}</p>
  </div>
);

VideoItem.propTypes = {
  video: PropTypes.shape({
    url: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    assunto: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default VideoItem;