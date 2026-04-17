import axios, {
  AxiosError,
  type InternalAxiosRequestConfig,
} from 'axios';
import { store } from '../redux/store';

const apiBaseUrl = 'http://localhost:9000/';
const loginRequestUrl = `${apiBaseUrl}login`;
const refreshTokenUrl = `${apiBaseUrl}refreshToken`;

type RetriableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (
    config.url !== loginRequestUrl &&
    config.url !== refreshTokenUrl &&
    config.url?.startsWith(apiBaseUrl)
  ) {
    const reduxState = store.getState();
    config.headers.Authorization = `Bearer ${reduxState.auth.accessToken}`;
  }

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetriableRequestConfig | undefined;
    const status = error.response?.status;

    if (
      status !== 403 ||
      !originalRequest ||
      originalRequest._retry ||
      originalRequest.url === refreshTokenUrl
    ) {
      return Promise.reject(error);
    }

    const authState = store.getState().auth;
    if (!authState.refreshToken) {
      store.dispatch({ type: 'logout' });
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const refreshResponse = await axios.post(refreshTokenUrl, {
        token: authState.refreshToken,
      });

      const newAccessToken = refreshResponse.data.accessToken as string;
      const nextAuthState = {
        ...authState,
        accessToken: newAccessToken,
      };

      store.dispatch({
        type: 'login',
        payload: nextAuthState,
      });

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios(originalRequest);
    } catch (refreshError) {
      store.dispatch({ type: 'logout' });
      return Promise.reject(refreshError);
    }
  },
);
