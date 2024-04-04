import Header from "./../header";

import "./index.module.css";

import data from "./data.js";

export default function App({ children }) {
  return (
    <>
      <Header model={data.modelHeader} />
      <main>{children}</main>
    </>
  );
}
