"use client";
import { useState } from "react";

import styles from "./index.module.css";
import data from "./data.js";
import Card from "./card";

import ModalImage from "./modal-image";

export default function App() {
  const [urlModal, setUrlModal] = useState("");
  const [activeModal, setActiveModal] = useState(false);

  function showModal(url) {
    setUrlModal(url);
    setActiveModal(true);
  }

  const listCards = data.map((item, index) => (
    <Card
      key={"id-card-" + index}
      url={item.url}
      name={item.name}
      description={item.description}
      icons={item.icons}
      hrefRepository={item.hrefRepository}
      hrefDemo={item.hrefDemo}
      hrefDownload={item.hrefDownload}
      images={item.images}
      extra={item.extra}
      to={showModal}
      detail={item.detalle}
      size={item.size}
    />
  ));

  return (
    <section id="section-projects" className={styles.container}>
      <h2>Proyectos</h2>
      <p>
        En mi viaje en el mundo de la informática ha estado marcado por una
        serie de proyectos personales que he desarrollado con pasión y
        dedicación a lo largo de mis estudios. Estos proyectos no solo reflejan
        mi interés en la tecnología, sino también mi compromiso con la búsqueda
        constante de soluciones. Algunos ejemplos destacados de mi trabajo
        incluyen:
      </p>
      <div className={styles.cards}>{listCards}</div>
      <ModalImage
        url={urlModal}
        active={activeModal}
        close={() => {
          setActiveModal(false);
        }}
      />
    </section>
  );
}
