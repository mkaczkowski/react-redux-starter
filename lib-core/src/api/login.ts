import axios, { AxiosResponse } from 'axios';
import { User } from '../model/User';
import { LoginFormPayload } from '../model/form/LoginFormPayload';

const login = async (value: LoginFormPayload): Promise<User> => {
  const url = '/users/sign_in';
  const data = {
    user: {
      ...value,
    },
  };
  const response: AxiosResponse = await axios.post(url, data);
  return response.data;
};

export default login;
