import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL

const defaultConfig = {
  timeout: 5000,
  baseURL
};

class Http {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  axiosInstance = axios.create(defaultConfig);

  /**
   * 请求拦截
   */
  httpInterceptorsRequest() {
    this.axiosInstance.interceptors.request.use(
      (config) => config,
      (err) => Promise.reject(err)
    );
  }

  /**
   * 响应拦截
   */
  httpInterceptorsResponse() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (err) => Promise.reject(err)
    );
  }

  /**
   * GET请求
   */
  get(url, params) {
    return this.axiosInstance
      .get(url, params)
      .then((res) => res.data)
      .catch();
  }

  /**
   * POST请求
   */
  post(url, params) {
    return this.axiosInstance
      .post(url, params)
      .then((res) => res.data)
      .catch();
  }
}

const http = new Http();

export default http;
