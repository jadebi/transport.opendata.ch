import { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Switch, } from "@heroui/react";
import { Github, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">debi</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">debi</p>
        </NavbarBrand>
        <NavbarItem>
          <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-xl transition flex-row flex ${isActive ? "dark:bg-blue-800 bg-blue-500 dark:text-white" : "bg-transparent dark:text-white"}`}>
            Landing
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="stationboard" className={({ isActive }) => `px-4 py-2 rounded-xl transition flex-row flex ${isActive ? "dark:bg-blue-800 bg-blue-500 dark:text-white" : "bg-transparent dark:text-white"}`}>
            Stationboard
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} isSelected={darkMode} startContent={<Moon />} endContent={<Sun />} />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="https://github.com/CuddlyCornet645/transport.opendata.ch" variant="flat">
            <Github /> View Code
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-xl transition flex-row flex ${isActive ? "dark:bg-blue-800 bg-blue-500 dark:text-white" : "bg-transparent dark:text-white"}`}>
            Landing
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink to="stationboard" className={({ isActive }) => `px-4 py-2 rounded-xl transition flex-row flex ${isActive ? "dark:bg-blue-800 bg-blue-500 dark:text-white" : "bg-transparent dark:text-white"}`}>
            Stationboard
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}