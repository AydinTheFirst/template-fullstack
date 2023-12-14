import { Button, Navbar } from "flowbite-react";
import { useEffect } from "react";

export const NavbarComponent = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) document.body.style.paddingTop = navbar.clientHeight + "px";
  }, []);

  const logout = async () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Navbar
      id="navbar"
      className="py-5 px-10 border-b fixed z-10 w-full top-0 left-0"
    >
      <Navbar.Brand href="/">
        <img src="/logo.png" alt="logo" width={40} />
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
          FRISTROOP
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-1 ms-1">
        <Button color="red" size={"xs"} onClick={logout}>
          <i className="fa-solid fa-right-from-bracket md:me-2"></i>
          <span className="hidden md:block">Logout</span>
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        <Navbar.Link href="https://github.com/AydinTheFirst">
          Github
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
