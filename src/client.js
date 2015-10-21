import '../node_modules/normalize.css/normalize.css';
import './client.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import Greeter from './components/Greeter';
import Index from './components/Index';
import HelloWorldApp from './components/HelloWorldApp';

const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="hello/:name" component={Greeter} />
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
