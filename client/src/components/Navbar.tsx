import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { SideComponent } from "./Sidebar";

import { AvatarBox } from "./Avatar";
import { pages, socials } from "../utils/Contants";

export const NavbarComponent = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="t-0 fixed w-full">
        <div className="container">
          <Navbar
            id="navbar"
            className="rounded-full bg-transparent backdrop-blur-3xl dark:bg-transparent"
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

            <div className="ms-1 flex gap-1 md:order-2">
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
        </div>
      </div>

      <SideComponent isOpen={isOpen} />
    </>
  );
};
