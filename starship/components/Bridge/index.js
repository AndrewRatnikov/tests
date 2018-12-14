// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';
import observatory from './observatory.jpg';
import { book } from '../../routes/book';

const mapStateToProps = (state) => ({
    profile: state.profile,
});

@connect(mapStateToProps)
export class Bridge extends Component {
    static defaultProps = {
        profile: {
            firstName: 'имя',
            lastName:  'фамилия',
        },
    };

    _changeRoute = (route) => () => {
        this.props.history.push(route);
    };

    render() {
        const { profile } = this.props;

        return (
            <section className = { Styles.bridge }>
                <h1>
                    Добро пожаловать на борт, {profile.firstName}
                    &nbsp;
                    {profile.lastName}!
                </h1>
                <img src = { observatory } />
                <button onClick = { this._changeRoute(book.panel) }>🖥 &nbsp;Контрольная панель</button>
            </section>
        );
    }
}
