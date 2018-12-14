// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { Nav, Bridge, Profile, Starship, Panel } from '../components';
import { book } from './book';

@hot(module)
export class Routes extends Component {
    render() {
        return (
            <>
                <Route
                    component = { Nav }
                    path = { book.root }
                />
                <Switch>
                    <Route
                        exact
                        component = { Bridge }
                        path = { book.root }
                    />
                    <Route
                        exact
                        component = { Profile }
                        path = { book.profile }
                    />
                    <Route
                        exact
                        component = { Panel }
                        path = { book.panel }
                    />
                    <Route
                        exact
                        component = { Starship }
                        path = { book.starship }
                    />
                    <Redirect to = { book.root } />
                </Switch>
            </>
        );
    }
}
