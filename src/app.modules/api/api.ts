import axios from "axios";
import sign from "./sign";
import { objectToURL } from "../func/index";
import { errorHandler } from "./errorHandler";

let axiosClient = axios.create({
  baseURL: process.env.MOMENTO_ADMIN_API_URI,
});

export const request: any = async ({ url, method, data = null }) => {
  try {
    const getSession = await axios.post("/api/session");

    const response: any = await axiosClient({
      method,
      url,
      data,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getSession.data.token}`,
      },
    });

    return response;
  } catch (error) {
    errorHandler(error.response);
    sign.outCodeLogout(error);
    throw error.response;
  }
};

class API {
  async CALL({ method, url, data = null }) {
    return request({ method, url, data });
  }

  GET({ url, ...params }) {
    return this.CALL({
      method: "GET",
      url: url + objectToURL(params.data),
    });
  }

  POST({ url, ...params }) {
    return this.CALL({
      method: "POST",
      url,
      ...params,
    });
  }

  PUT({ url, ...params }) {
    return this.CALL({
      method: "PUT",
      url,
      ...params,
    });
  }

  DELETE({ url, ...params }) {
    return this.CALL({
      method: "DELETE",
      url,
      ...params,
    });
  }
}

export default new API();
