import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: true,
});

axios.interceptors.request.use((req) => {
  const tokenJwt = localStorage.getItem('token');

  if (!tokenJwt) {
    return req;
  }

  req.headers.Authorization = `Bearer ${tokenJwt}`;

  return req;
});

axios.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);
