"use client";
import { useState } from "react";
import styles from "./index.module.css";

export default function App(props) {
  const [isShowingNav, setIsShowingNav] = useState(false);

  function handleShowNav() {
    setIsShowingNav(!isShowingNav);
  }

  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }

    setIsShowingNav(false);
  }

  const listSections = props.model.sections.map((item, index) => (
    <li key={"header-nav-ul-li" + index}>
      <a href={item.href} onClick={(e) => scrollToSection(e)}>
        {item.label}
      </a>
    </li>
  ));

  return (
    <header>
      <a
        href={props.model.logo.href}
        onClick={(e) => scrollToSection(e)}
        className={styles.logo}
        style={{
          backgroundImage: `url(${props.model.logo.url})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></a>
      <nav className={`${isShowingNav ? styles.navOpen : ""}`}>
        <ul>{listSections}</ul>
      </nav>
      <div className={styles.bars} onClick={handleShowNav} />
    </header>
  );
}
