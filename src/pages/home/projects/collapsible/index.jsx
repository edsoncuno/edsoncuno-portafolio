"use client";
import styles from "./index.module.css";
import { useState } from "react";

import Gallery from "../gallery";

export default function App(props) {
  const [isActive, setIsActive] = useState(false);

  const toggleCollapsible = () => {
    setIsActive(!isActive);
  };

  return (
    <article className={styles.container}>
      <div
        className={styles.toggle}
        onClick={toggleCollapsible}
        style={
          isActive
            ? {
                backgroundColor: "#3f72af",
                color: "white",
                borderRadius: "0 0 0 0",
                borderColor: "transparent",
              }
            : {}
        }
      >
        {isActive ? "Ocultar Detalle" : "Mostrar Detalle"}
        <div
          className={styles.icon}
          style={
            isActive
              ? {
                  backgroundImage: "url(/icons/up.svg)",
                }
              : {}
          }
        ></div>
      </div>
      <div
        className={styles.content}
        style={
          isActive
            ? {
                height: "auto",
                border: "transparent",
              }
            : {}
        }
      >
        <p style={{ margin: "1rem" }}>Extra</p>
        <Gallery images={props.images} to={props.to} />
      </div>
    </article>
  );
}
