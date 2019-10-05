import React from 'react';
import { Provider } from 'react-redux';
import { confStore } from './src/store/index';
import Main from './src/view/Main';
import createSagaMiddleware from 'redux-saga';
import SagaRepository from './src/store/saga/ApiSaga';

const sagaMiddleware = createSagaMiddleware()
const store = confStore(sagaMiddleware);
sagaMiddleware.run(SagaRepository);
const App = () => {
  if (__DEV__) {
    import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
