import styles from "./Greetings.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.text1}>
        <h1>
          CONSTRUIR SOFTWARE<span className={styles.textCursor}></span>
        </h1>
      </div>
      <div className={styles.text2}>¡Hola! Soy</div>
      <div className={styles.text3}>
        <div className={styles.TypingText}>Edson Cuno</div>
      </div>
      <div className={styles.text4}>
        Desarrollador Full Stack y Analista de Datos
      </div>
      <ul className={styles.SocialNetwork}>
        <li>
          <a href={"https://github.com/edsoncuno"} target="_blank">
            <div
              className={styles.iconGithub}
              style={{
                width: "1.5rem",
                height: "1.5rem",
                backgroundImage: 'url("/icons/github.svg")',
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginRight: "0.5rem",
              }}
            ></div>
            <div>Github</div>
          </a>
        </li>
        <li>
          <a
            href={"https://www.linkedin.com/in/edson-diego-cuno-tipso"}
            target="_blank"
          >
            <div
              className={styles.iconLinkedIn}
              style={{
                width: "1.5rem",
                height: "1.5rem",
                backgroundImage: 'url("/icons/linkedin.svg")',
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginRight: "0.5rem",
              }}
            ></div>
            <div>LinkedIn</div>
          </a>
        </li>
      </ul>
    </div>
  );
}
