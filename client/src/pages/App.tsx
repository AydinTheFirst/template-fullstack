import { Button } from "flowbite-react";
import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import { useEffect } from "react";
import { socket } from "../utils/socket";

export const App = () => {
  useEffect(() => {
    socket("id").emit("join", { room: "main" });
  }, []);
  return (
    <>
      <NavbarComponent />

      <main className="container mt-10 p-3 dark:text-white">
        {/** BOX */}
        <img
          src="/logo.png"
          width={"200px"}
          alt=""
          className="p-5 flex mx-auto"
        />
        <div className="text-center mt-10">
          <div className="colored font-bold text-3xl">
            Experience the Extraordinary
            <div className="text-black dark:text-white text-lg">
              Let Dreams Come True
            </div>
          </div>
        </div>

        <div className="my-5 flex justify-center">
          <Button href="/dashboard" outline gradientDuoTone="purpleToBlue">
            Go to dashboard
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
};
