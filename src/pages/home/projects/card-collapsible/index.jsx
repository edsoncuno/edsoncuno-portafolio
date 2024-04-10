"use client";
import styles from "./index.module.css";
import { useState } from "react";

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
              }
            : {}
        }
      >
        {props.title}
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
                border: "1px solid grey",
              }
            : {}
        }
      >
        <p style={{ margin: "1rem" }}>asd</p>
      </div>
    </article>
  );
}
