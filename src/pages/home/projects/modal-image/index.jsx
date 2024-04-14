"use client";
import { useState, useEffect } from "react";

export default function App(props) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(props.active);
    if (window.innerWidth > 768) {
      setActive(false);
    }
  }, [props.active, window.innerWidth]);

  return (
    <>
      {active && (
        <div
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            zIndex: "99",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={props.close}
        >
          <img
            src={props.url}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}
