import axios, { AxiosError, AxiosResponse } from "axios";

const BaseAxios = axios.create({});

BaseAxios.defaults.withCredentials = true;

const configAxiosHeader = () => {};

configAxiosHeader();

BaseAxios.interceptors.request.use(function (request) {
  return request;
});

BaseAxios.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error: Error | AxiosError) {
    return Promise.reject(error);
  },
);

export default BaseAxios;
