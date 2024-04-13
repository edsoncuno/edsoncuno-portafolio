import Header from "./../header";

import styles from "./index.module.css";

import data from "./data.js";

export default function App({ children }) {
  return (
    <>
      <Header model={data.modelHeader} />
      <main className={styles.container}>{children}</main>
    </>
  );
}
