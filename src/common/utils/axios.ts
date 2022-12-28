import axios, { AxiosInstance } from 'axios';
import { clientBaseEndpoint } from 'common/client.config';

/**
 * Create an Axios Client in server side with defaults
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: clientBaseEndpoint,
  headers: {
    'MEESHO-ISO-COUNTRY-CODE': 'IN',
    'content-type': 'application/json',
  },
  timeout: 15000,
  withCredentials: true,
});

export default axiosInstance;
