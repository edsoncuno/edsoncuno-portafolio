import styles from "./index.module.css";

import Greetings from "./greetings";

export default function App() {
  return (
    <section id="section-home" className={styles.container}>
      <div className={styles.photo}></div>
      <div className={styles.greetings}>
        <Greetings />
      </div>
    </section>
  );
}
