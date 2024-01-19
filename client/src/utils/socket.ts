import io from "socket.io-client";
import { API } from "../config";
import { toast } from "./toast";

export const socket = (token: string) => {
  const socket = io(API, {
    query: {
      token,
    },
  });

  socket.on("error", (error: string) => {
    toast({
      description: error,
    });
  });

  return socket;
};
