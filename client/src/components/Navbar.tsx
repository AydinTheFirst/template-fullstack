import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { SideComponent } from "./Sidebar";

import { FaHome, FaChartPie, FaGithub } from "react-icons/fa";

import { AvatarBox } from "./Avatar";

export const NavbarComponent = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) document.body.style.paddingTop = navbar.clientHeight + 1 + "px";
  }, []);

  return (
    <>
      <Navbar
        id="navbar"
        className="py-5 px-10 border-b fixed z-8 w-full top-0 left-0"
      >
        <Navbar.Brand
          href="/"
          className="transition-all hover:-rotate-6 hover:scale-125"
        >
          <img src="/logo.png" alt="logo" width={40} />
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            FRISTROOP
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2 gap-1 ms-1">
          <div className="hidden md:block">
            <AvatarBox />
          </div>
          <Navbar.Toggle onClick={() => setOpen(!isOpen)} />
        </div>

        <Navbar.Collapse>
          {pages.map((p) => {
            return (
              <Navbar.Link key={p.name} href={p.href}>
                {p.name}
              </Navbar.Link>
            );
          })}
          <div className="border"></div>
          {socials.map((p) => {
            return (
              <Navbar.Link key={p.name} href={p.href}>
                {p.name}
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>

      <SideComponent isOpen={isOpen} />
    </>
  );
};

export const pages = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: FaChartPie,
  },
];

export const socials = [
  {
    name: "Github",
    href: "https://github.com/AydinTheFirst",
    icon: FaGithub,
  },
];
