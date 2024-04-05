import styles from "./index.module.css";
import data from "./data.js";
import Badge from "./badge";

export default function App() {
  const listBadges = data.tools.map((item, index) => (
    <Badge
      key={"id_tools_" + index}
      name={item.name}
      url={item.url}
      shadowColor={item.shadowColor}
    />
  ));

  return (
    <section id="section-about-me" className={styles.container}>
      <h2>Acerca de mí</h2>
      <p>
        Estudiante de Ingeniería Informática con conocimientos en Data Science y
        Web Service.
      </p>
      <p>
        Actualmente, me dedico a incrementar mis habilidades con el manejo de
        los datos y modelado predictivo y de clasificación. También a construir
        sistemas web.
      </p>
      <h3>Herramientas</h3>
      <p>
        El conjunto de herramientas tecnológicas que utilizo para aumentar mi
        eficacia y creatividad en el mundo de la informática son:
      </p>
      <div className={styles.badges}>{listBadges}</div>
    </section>
  );
}
