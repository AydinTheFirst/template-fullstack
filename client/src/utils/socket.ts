import io from "socket.io-client";
import { API } from "../config";
import { Alert } from "./Alert";

export const socket = (token: string) => {
  const socket = io(API, {
    query: {
      token,
    },
  });

  socket.on("error", (error: string) => {
    Alert({
      title: "Websocket error",
      description: error,
    });
  });

  return socket;
};
