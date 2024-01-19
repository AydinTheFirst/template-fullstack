import axios from "axios";

import { API } from "../config";
import { toast } from "./toast";
import { Routes } from "./Routes";

/**
 * REST module is developed in order to make easier to work with REST API's.
 * This module uses axios for making requests.
 * It is flexible
 */
export class REST {
  baseURL: string;
  token: string;
  routes: typeof Routes;
  constructor(restConf: IRestConfig) {
    this.baseURL = restConf.baseURL;
    this.token = restConf.token;
    this.routes = Routes;
  }

  makeRequest = async (
    url: string,
    data: object,
    method: string
  ): Promise<any> => {
    // make request
    try {
      const res = await axios({
        baseURL: this.baseURL,
        headers: {
          Authorization: this.token,
        },
        url,
        method,
        data,
      });

      return res.data;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      throw new Error(error);
    }
  };

  async get(path: string, body: object | null) {
    path = path + "?" + this._bodyToQueryParams(body);
    body = {};
    return this.makeRequest(path, body, "GET");
  }

  async delete(path: string, body: object) {
    return this.makeRequest(path, body, "DELETE");
  }

  async post(path: string, body: object) {
    return this.makeRequest(path, body, "POST");
  }

  async put(path: string, body: object) {
    return this.makeRequest(path, body, "PUT");
  }

  async patch(path: string, body: object) {
    return this.makeRequest(path, body, "PATCH");
  }

  setToken(token: string) {
    this.token = token;
  }

  _bodyToQueryParams(body: any) {
    const params = new URLSearchParams();

    for (const key in body) {
      // eslint-disable-next-line no-prototype-builtins
      if (body.hasOwnProperty(key)) {
        params.append(key, body[key]);
      }
    }
    return params.toString();
  }

  error(error: any) {
    let errorMessage = "Something went wrong";

    if (error.response && error.response.data.message) {
      errorMessage = error.response.data.message;
    }

    console.log(error);
    return toast({
      description: errorMessage,
      type: "failure",
    });
  }
}

// Export
export const rest = new REST({
  baseURL: API,
  token: localStorage.getItem("token") || "Bearer token",
});

export interface IRestConfig {
  baseURL: string;
  token: string;
}
