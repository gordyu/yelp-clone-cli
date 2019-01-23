import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


import reducers from './store/reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './sass/main.scss';

import  Home  from './components/pages/home/Home';
import  LandingPage  from './components/pages/LandingPage';

import { Router, Route, Switch } from 'react-router-dom';
import history from './store/history';

const store = createStore(
    reducers,applyMiddleware(reduxThunk)
);


ReactDOM.render(
    <Provider store={store}>
    <Router  history={history}>
        <App>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/landing" component={LandingPage} />
        </Switch>
        </App>
    </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
