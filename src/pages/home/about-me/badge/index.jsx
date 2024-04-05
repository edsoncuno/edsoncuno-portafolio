"use client";
import { useState } from "react";
import styles from "./index.module.css";

export default function App(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={styles.item}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: `0 0 1rem ${isHovered ? props.shadowColor : "transparent"}`,
      }}
    >
      <div
        className={styles.icon}
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundPosition: "center",
          backgroundSize: "90% 90%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={styles.name}>{props.name}</div>
    </article>
  );
}
