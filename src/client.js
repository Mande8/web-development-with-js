import '../node_modules/normalize.css/normalize.css';
import './client.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';
const history = createHistory();

import Greeter from './components/Greeter';
import Index from './components/Index';
import HelloWorldApp from './components/HelloWorldApp';
import KrelloApp from './components/KrelloApp';

const routes = (
    <Router history={history}>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="hello/:name" component={Greeter} />
        </Route>

        <Route path="/krello" component={KrelloApp}>

        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
