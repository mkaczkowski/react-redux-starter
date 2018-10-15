import axios, { AxiosResponse } from 'axios';
import { User } from '../model/User';
import { LoginFormPayload } from '../model/LoginFormPayload';

export interface LoginApiData {
  user: LoginFormPayload;
}

export const login = async (payload: LoginFormPayload): Promise<User> => {
  const url = '/users/sign_in';
  const data: LoginApiData = {
    user: {
      ...payload,
    },
  };
  const response: AxiosResponse = await axios.post(url, data);
  return response.data;
};
