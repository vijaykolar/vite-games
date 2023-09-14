import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../types.ts";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11c85b844f0e412eb7cf38d8f678ef93",
  },
});

export class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config,
    );
    return res.data;
  };
}
