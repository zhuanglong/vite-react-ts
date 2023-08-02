import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios';

import { useUserInfoStore } from '@/stores';

export interface ApiResult<T = any> {
  code: number;
  data: T;
  message: string;
}

class Request {
  private instance: AxiosInstance;
  // 存放取消请求控制器 Map
  private abortControllerMap: Map<string, AbortController>;

  constructor(config: CreateAxiosDefaults) {
    this.instance = axios.create(config);

    this.abortControllerMap = new Map();

    // 请求拦截器
    this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      //// showLoading
      if (config.url !== '/login') {
        const token = useUserInfoStore.getState().userInfo?.token;
        if (token) config.headers.Authorization = `Bearer ${token}`;
      }

      const controller = new AbortController();
      const url = config.url || '';
      config.signal = controller.signal;
      this.abortControllerMap.set(url, controller);

      return config;
    }, Promise.reject);

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        //// hideLoading
        const url = response.config.url || '';
        this.abortControllerMap.delete(url);
        return response.data;
      },
      (error: AxiosError) => {
        //// hideLoading
        if (error.response?.status === 401) {
          useUserInfoStore.setState({ userInfo: null });
          window.location.href = `/login?redirect=${window.location.pathname}`;
          return Promise.reject(error);
        }

        let errMessage = '';
        if (axios.isCancel(error) as boolean) {
          errMessage = '请求取消';
        } else if (error?.code === 'ECONNABORTED' || error?.message.indexOf('timeout') !== -1) {
          errMessage = '请求超时';
        } else if (error?.response) {
          // 请求已发出，但是不在 2xx 的范围
          errMessage = this.matchHttpStatusCode(error?.response.status);
        } else {
          errMessage = '网络异常，请检查您的网络连接是否正常';
        }
        console.warn('request error:', errMessage);

        return Promise.reject(error);
      },
    );
  }

  // 取消全部请求
  cancelAllRequest() {
    for (const [, controller] of this.abortControllerMap) {
      controller.abort();
    }
    this.abortControllerMap.clear();
  }

  // 取消指定的请求
  cancelRequest(url: string | string[]) {
    const urlList = Array.isArray(url) ? url : [url];
    for (const _url of urlList) {
      this.abortControllerMap.get(_url)?.abort();
      this.abortControllerMap.delete(_url);
    }
  }

  // 匹配状态码
  matchHttpStatusCode(status: number): string {
    let errMessage = '';
    switch (status) {
      // case 401:
      //   errMessage = '没有该操作权限';
      //   break;
      case 403:
        errMessage = '服务器禁止访问';
        break;
      case 404:
        errMessage = '服务器没有此服务';
        break;
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
        errMessage = '服务器错误';
        break;
      default:
        errMessage = `未知错误 ${status}`;
    }
    return errMessage;
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config);
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config);
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config);
  }
}

export const httpClient = new Request({
  baseURL: '',
  timeout: 20 * 1000,
});