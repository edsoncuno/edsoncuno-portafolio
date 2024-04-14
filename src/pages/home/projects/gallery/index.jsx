"use client";
import { useState, useEffect } from "react";

import styles from "./index.module.css";

export default function App(props) {
  const [active, setActive] = useState(false);
  const [url, setUrl] = useState();

  useEffect(() => {
    if (Array.isArray(props.images) && props.images.length > 0) {
      setUrl(props.images[0]);
    }
  }, [props.images]);

  let listImages = null;
  if (Array.isArray(props.images) && props.images.length > 0) {
    listImages = props.images.map((item, index) => (
      <div
        key={"id-gallery-" + index}
        className={styles.image}
        style={{
          backgroundImage: `url("${item}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => {
          setActive(!active);
          setUrl(item);
          props.to(item)
        }}
      >
      </div>
    ));
  }
  return (
    <>
      {listImages && (
        <div className={styles.container}>
          <div className={styles.images}>{listImages}</div>
          <div
            className={styles.imageFull}
            style={{
              backgroundImage: `url("${url}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      )}
    </>
  );
}
