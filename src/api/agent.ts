import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

let store: any;
export const injectStore = (_store: any) => {
  store = _store;
};
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error: AxiosError) => {
    const {   status } = error.response!;
 
    switch (status) {
      case 401:
        if (status === 401) {
          toast.error("Session expired - please login again");
        }
        break;
    }
    return Promise.reject(error);
  }
);
const responseBody = (response: AxiosResponse) => response.data;

const Users = {
  login: (username?: string, password?: string): Promise<any> =>
    axios.post(`/auth/login`, { username, password }),
  register: (
    email?: string,
    firstName?: string,
    lastName?: string,
    password?: string
  ): Promise<any> =>
    axios.post(`/auth/register`, { email, firstName, lastName, password }),
  list: (searchText = "") =>
    axios.get<any>(`/users?searchText=${searchText}`).then(responseBody),
};

export default {
  Users,
};
