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
      <div className={styles.text3}>Edson Cuno</div>
      <div className={styles.text4}>
        Desarrollador Full Stack y Analista de Datos
      </div>
    </div>
  );
}
