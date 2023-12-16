import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { SideComponent } from "./Sidebar";

import { AvatarBox } from "./Avatar";
import { pages, socials } from "../utils/Contants";

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
