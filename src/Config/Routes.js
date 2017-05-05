import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';

// import { Router, Route } from 'react-router';

import App from '../Components/App/App';
import About from '../Components/About/About';
import NotFound from '../Components/NotFound/Notfound';

const Routes = (props) => (
    <Router {...props}>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Redirect from="/old-match" to="/will-match"/>
                <Route path="/will-match" component={About}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;