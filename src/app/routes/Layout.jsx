import { Outlet } from "react-router";
import { Navbar, Footer } from "@/components";
import { styles } from "./layout.module.css";
const Layout = () => {
  return (
    <div className={styles}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
