import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from '../Pages/Home/Home';
import Work from '../Pages/Work/Work';
import About from '../Components/About/About';
import NotFound from '../Components/NotFound/Notfound';
import Footer from "../Components/Footer/Footer";
// import Navbar from "../Components/Navbar/Navbar";

const Routes = (props) => (
    <Router {...props}>
        <div>

            {/*<Navbar/>*/}

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/works/:work" component={Work} />
                <Route path="/about" component={About} />
                <Redirect from="/old-match" to="/will-match"/>
                <Route path="/will-match" component={About}/>
                <Route component={NotFound}/>
            </Switch>

            <Footer/>
        </div>
    </Router>
);

export default Routes;