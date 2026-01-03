import { Outlet } from "react-router-dom";
import Navbar from "./components/localComponents/Navbar";
import Footer from "./components/localComponents/Footer";
export default function Layout() {
  return (
    <>
      <header>
        <div id="logo"></div>
        <nav>
          <Navbar />
        </nav>

        <div></div>
      </header>
      ;
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
