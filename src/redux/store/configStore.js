import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducer';
import rootSaga from '../saga/rootSaga';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
let middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares = [...middlewares, logger, sagaMiddleware];

const middleware = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
