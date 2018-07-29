//@flow
import axios from 'axios';
import CONFIG, { __DEV__ } from '@core/config';

export type LoginApi = {
  email: string,
  password: string,
  remember_me: string,
};

export const login = async (value: LoginApi) => {
  const url = `${CONFIG.api.apiUrl}/users/sign_in`;
  const data = {
    user: {
      ...value,
    },
  };

  // if (__DEV__) {
  //   data.user.email = CONFIG.api.userLogin || data.user.email;
  // data.user.password = CONFIG.api.userPassword || data.user.password;
  // }

  const response = await axios.post(url, data);
  return response.data;
};
