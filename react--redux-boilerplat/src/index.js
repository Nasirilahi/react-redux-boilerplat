import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute , Route, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Welcome from './components/Welcome.jsx';
import User from './components/User';
import configureStore from './store/configureStore'

const store = configureStore();

ReactDOM.render(
    <Provider store = { store }>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Welcome} />
                <Route path="user" component={User} />
            </Route>
        </Router>
    </Provider> , document.getElementById('app'));