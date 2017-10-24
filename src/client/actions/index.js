import { FETCH_USERS, RECEIVE_USERS } from './constants';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  payload: {
    users,
  },
});
