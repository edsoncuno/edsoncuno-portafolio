import Header from "./../header";

import "./index.module.css";

export default function App({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
