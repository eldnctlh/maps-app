import React, {Component, Fragment} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from '../components/Header';
import MapContainer from './MapContainer';

class RouterNavigation extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/about">
                        <p>sss</p>
                    </Route>
                    <Route path="/auth">
                        <p>ddd</p>
                    </Route>
                    <Route path="/">
                        <MapContainer />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default RouterNavigation;