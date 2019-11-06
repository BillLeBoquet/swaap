import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import * as reducers from "./modules/reducers";
import sagas from "./sagas/sagas";
import * as serviceWorker from './serviceWorker';
import App from './App';

//TODO : ROUTING AVEC react-router-5

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'production') {
    middleware.push(logger)
}

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(...middleware),
);

sagas.forEach(saga => sagaMiddleware.run(saga))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
