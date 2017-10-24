import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/rederer';
import configureStore from './helpers/configureStore.dev';
import rootSaga from './client/sagas';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = configureStore();
  store.runSaga(rootSaga);

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
