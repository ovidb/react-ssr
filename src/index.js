import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/rederer';
import configureStore from './helpers/configureStore.dev';
import rootSaga from './client/sagas';
import Routes from './client/routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = configureStore();
  store.runSaga(rootSaga);

  console.log(matchRoutes(Routes, req.path));

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
