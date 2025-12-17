import { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button, Switch, } from "@heroui/react";
import { Github, House, Moon, Search, Sun } from "lucide-react";
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

      <NavbarContent className="hidden sm:flex gap-0" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit mr-4">debi</p>
        </NavbarBrand>
        <NavbarItem>
          <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-xl transition flex-row flex ${isActive ? "dark:bg-blue-800 bg-blue-500 dark:text-white" : "bg-transparent dark:text-white"}`}>
            <House className="mr-1" /> Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="stations" className={({ isActive }) => `px-4 py-2 rounded-xl transition flex-row flex ${isActive ? "dark:bg-blue-800 bg-blue-500 dark:text-white" : "bg-transparent dark:text-white"}`}>
            <Search className="mr-1" /> Stations
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} isSelected={darkMode} startContent={<Moon />} endContent={<Sun />} />
        </NavbarItem>
        <NavbarItem>
          <Button as={NavLink} color="primary" to="https://github.com/CuddlyCornet645/transport.opendata.ch" variant="flat">
            <Github /> View Code
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-xl transition flex-row flex ${isActive ? "bg-primary " : "bg-transparent"}`}>
            Landing
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink to="stations" className={({ isActive }) => `px-4 py-2 rounded-xl transition flex-row flex ${isActive ? "bg-primary " : "bg-transparent"}`}>
            Stations
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}