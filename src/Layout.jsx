import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/localComponents/Navbar";
import Footer from "./components/localComponents/Footer";
import logo from "@/assets/icons/Nadjah_brand_logo_1_no_bg.svg";
import { Moon, Sun } from "lucide-react";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur px-6 py-3 flex items-center justify-between">
        <div id="logo" className="flex items-center ">
          <img
            className="w-8 h-8 hover:scale-105 transition-all duration-300 cursor-pointer"
            src={logo}
            alt="Nadjah Logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        <nav>
          <Navbar />
        </nav>

        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-accent transition-colors cursor-pointer"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-orange-500" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-blue-400" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t">
        <Footer />
      </footer>
    </div>
  );
}
