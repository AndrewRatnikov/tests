// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import { book } from '../../routes/book';

export class Nav extends Component {
    changeRoute = (route) => () => {
        this.props.history.push(route);
    };

    render() {
        const {
            location: { pathname },
        } = this.props;

        return (
            <section className = { Styles.nav }>
                {pathname !== book.root && (
                    <>
                        <button
                            className = { Styles.bridge }
                            type = 'button'
                            onClick = { this.changeRoute(book.root) }>
                            🛸&nbsp;Bridge
                        </button>
                        <button
                            type = 'button'
                            onClick = { this.changeRoute(book.profile) }>
                            👽&nbsp;Profile
                        </button>
                        <button
                            type = 'button'
                            onClick = { this.changeRoute(book.panel) }>
                            🎮&nbsp;Panel
                        </button>
                    </>
                )}
            </section>
        );
    }
}
