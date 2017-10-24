import { RECEIVE_USERS } from '../actions/constants';

export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.payload.users;
    default:
      return state;
  }
}
