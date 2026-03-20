import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface ILayout {
  children: ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
