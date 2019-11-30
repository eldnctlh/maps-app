import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from '../components/Header';
import About from '../components/About';
import Auth from '../components/Auth';
import MapContainer from './MapContainer';

const RouterNavigation = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/auth">
                <Auth />
            </Route>
            <Route path="/">
                <MapContainer />
            </Route>
        </Switch>
    </Router>
)

export default RouterNavigation;