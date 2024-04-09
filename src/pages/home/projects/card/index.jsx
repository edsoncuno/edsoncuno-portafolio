import styles from "./index.module.css";

export default function App(props) {
  const listIcons = props.icons.map((item, index) => {
    return (
      <li
        key={"id-card-icon" + index}
        className={styles.icon}
        style={{
          backgroundImage: `url("${item}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></li>
    );
  });

  return (
    <article className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url("${props.url}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={styles.text}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.description}>{props.description}</div>
        <ul className={styles.icons}>{listIcons}</ul>
        <ul className={styles.links}>
          {props.hrefRepository && (
            <a
              className={styles.link}
              href={props.hrefRepository}
              target="_blank"
            >
              <div className={styles.github}></div>Repostorio
            </a>
          )}
          {props.hrefDemo && (
            <a className={styles.link} href={props.hrefDemo} target="_blank">
              <div className={styles.web}></div>Visitar Web
            </a>
          )}
          {props.hrefDownload && (
            <a
              className={styles.link}
              href={props.hrefDownload}
              target="_blank"
            >
              <div className={styles.download}></div>Descargar
            </a>
          )}
        </ul>
      </div>
    </article>
  );
}
