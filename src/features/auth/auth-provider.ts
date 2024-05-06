import axios, { AxiosResponse } from 'axios';

export const authProvider = (
  email: string,
  password: string,
  token: string
): Promise<AxiosResponse<any, any>> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      axios
        .post(
          'http://localhost:3000/login',
          { email, password },
          {
            headers: {
              recaptcha: token,
            },
          }
        )
        .then(resolve)
        .catch(reject);
    }, 1500)
  );
};
