import React from "react";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="main_layout">
        <Header />
        <main className="page_content">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
