import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
