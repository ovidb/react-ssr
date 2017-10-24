import axios from 'axios';
import { API_URL } from './constants';

export const getUsers = () =>
  axios.get(`${API_URL}/users`).then(res => res.data);
