import React from "react";
import { GlobalStyle } from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
