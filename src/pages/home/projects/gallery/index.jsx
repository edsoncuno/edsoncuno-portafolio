import styles from "./index.module.css";

export default function App(props) {
  const listImages = props.images.map((item, index) => (
    <div
      key={"id-gallery-" + index}
      className={styles.image}
      style={{
        backgroundImage: `url("${item}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  ));
  return (
    <div className={styles.container}>
      <div className={styles.images}>{listImages}</div>
      <div className={styles.imageFull}></div>
    </div>
  );
}
