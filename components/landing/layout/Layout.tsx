import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Email from "../home/Email";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Email />
      <Footer />
    </>
  );
};

export default Layout;
