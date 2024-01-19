import { useEffect, useState } from "react";
import { rest } from "../utils/REST";

export const useUser = () => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await rest.get(rest.routes.Auth.Me, {});
        localStorage.setItem("user", JSON.stringify(res));
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
    };
    if (localStorage.getItem("token")) fetch();
  }, []);

  return [user, setUser];
};
