import {
  Button,
  Checkbox,
  Label,
  Spinner,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";

import { HiMail, HiUser, HiLockClosed, HiIdentification } from "react-icons/hi";

import { useEffect, useState } from "react";
import { Routes, http } from "@/http";
import { toast } from "@/components/Toast";

export const Login = () => {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {}, [isLogin]);

  return (
    <div
      style={{ height: "100vh" }}
      className="my-10 flex items-center justify-center p-10"
    >
      <div
        style={{ width: "300px" }}
        className="w-auto rounded bg-slate-50 p-5 shadow dark:bg-slate-700"
      >
        <div className="flex justify-center">
          <img src="/logo.png" width={100} alt="" />
        </div>
        <div className="text-center">
          <span className="text-xl font-bold dark:text-white">
            Fristroop Development
          </span>
          <hr className="m-3" />

          <div className="flex justify-center gap-3 dark:text-white">
            <label htmlFor="switch">Login</label>
            <ToggleSwitch
              id="switch"
              checked={isLogin}
              onChange={() => setLogin(!isLogin)}
            />
            <label htmlFor="switch">Register</label>
          </div>
        </div>

        <div className="mt-5">{!isLogin ? <Base /> : <Register />}</div>
      </div>
    </div>
  );
};

const Base = () => {
  const params = new URLSearchParams(location.search);
  const redirectTo = params.get("redirectTo");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target as HTMLFormElement);
    try {
      const res = await http.post(Routes.Auth.Login, data);
      http.setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      location.replace(redirectTo || "/");
    } catch (error) {
      setLoading(false);
      return http.error(error);
    }
  };

  return (
    <>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username1" value="Username" />
          </div>
          <TextInput
            id="username1"
            name="username"
            type="text"
            icon={HiUser}
            placeholder="elonmusk123"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput
            id="password1"
            name="password"
            type={show ? "text" : "password"}
            icon={HiLockClosed}
            placeholder="elonmusk123"
            required
          />
        </div>
        <div className="flex items-center justify-end gap-1">
          <Checkbox id="show1" onChange={() => setShow(!show)} />
          <Label htmlFor="show1">Show Password</Label>
        </div>
        {loading ? (
          <Button>
            <Spinner aria-label="Spinner button example" size="sm" />
            <span className="pl-3">Loading...</span>
          </Button>
        ) : (
          <Button type="submit">Login</Button>
        )}
      </form>
    </>
  );
};

const Register = () => {
  const params = new URLSearchParams(location.search);
  const redirectTo = params.get("redirectTo");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const data = new FormData(e.target as HTMLFormElement);

    try {
      const res = await http.post(Routes.Auth.Register, data);

      const token = res.data.token;
      http.setToken(token);
      localStorage.setItem("token", token);

      toast({
        description:
          "Succeed! You will be redirected to login page in 5 seconds.",
      });

      setTimeout(() => {
        location.replace(redirectTo || "/");
        setLoading(false);
      }, 5000);
    } catch (error) {
      setLoading(false);
      return http.error(error);
    }
  };

  return (
    <>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="disName2" value="Your name" />
          </div>
          <TextInput
            id="disName2"
            name="displayName"
            type="text"
            icon={HiIdentification}
            placeholder="Elon Musk"
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="username2" value="Username" />
          </div>
          <TextInput
            id="username2"
            name="username"
            type="text"
            icon={HiUser}
            placeholder="elonmusk123"
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Username" />
          </div>
          <TextInput
            id="email2"
            name="email"
            type="email"
            icon={HiMail}
            placeholder="elonmusk@tesla.com"
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Password" />
          </div>
          <TextInput
            id="password2"
            name="password"
            type={show ? "text" : "password"}
            icon={HiLockClosed}
            placeholder="elonmusk123"
            required
          />
        </div>
        <div className="flex items-center justify-end gap-1">
          <Checkbox id="show1" onChange={() => setShow(!show)} />
          <Label htmlFor="show1">Show Password</Label>
        </div>
        {loading ? (
          <Button>
            <Spinner aria-label="Spinner button example" size="sm" />
            <span className="pl-3">Loading...</span>
          </Button>
        ) : (
          <Button type="submit">Register</Button>
        )}
      </form>
    </>
  );
};
