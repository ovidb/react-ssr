import React from 'react';
import Home from './components/Home';
import UsersList from './components/UserList';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/users/',
    component: UsersList,
  },
];
