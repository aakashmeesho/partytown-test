// @ts-nocheck
import { useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "common/utils/axios";

const AxiosInterceptor = ({ children }) => {
  const router = useRouter();

  const requestCallback = (request) => {
    return request;
  };

  const responseCallback = (response) => {
    return response;
  };

  const errorCallback = (error) => {
    if (error.response) {
      isUnauthorizedError(error.response);
    } else {
    }
    return Promise.reject(error);
  };

  const isUnauthorizedError = (response) => {
    if (response.status === 401) {
    }
  };

  useEffect(() => {
    const responseInterceptor = axiosInstance.interceptors.response.use(
      responseCallback,
      errorCallback
    );
    const requestInterceptor =
      axiosInstance.interceptors.request.use(requestCallback);

    return () => {
      axiosInstance.interceptors.response.eject(responseInterceptor);
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  return children;
};

export default AxiosInterceptor;
