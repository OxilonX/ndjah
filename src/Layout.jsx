import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/localComponents/Navbar";
import Footer from "./components/localComponents/Footer";
import logo from "@/assets/icons/Nadjah_brand_logo_1_no_bg.svg";
import { Moon, Sun, Settings } from "lucide-react";
import { useState, useEffect } from "react";
export default function Layout() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur px-6 py-2 flex items-center justify-between">
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
        <div className="flex items-center gap-2">
          <Settings
            onClick={() => navigate("/settings")}
            className="h-5 w-5 hover:rotate-90 transition-transform duration-300 cursor-pointer text-muted-foreground hover:text-foreground"
          />
          <button
            onClick={() => setIsDark(!isDark)}
            className="relative p-2 rounded-md hover:scale-105 hover:rotate-10  cursor-pointer transition-all duration-300"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-orange-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 bg-muted/50 dark:bg-card/30 rounded-xl shadow-sm">
        <Outlet />
      </main>

      <footer className="border-t">
        <Footer />
      </footer>
    </div>
  );
}
