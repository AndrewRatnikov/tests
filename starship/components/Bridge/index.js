// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Instruments
import Styles from './styles.m.css';
import observatory from './observatory.jpg';
import { book } from '../../routes/book';

const mapStateToProps = (state) => ({
    profile: state.profile,
    ...state.intl,
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
        const { profile, messages } = this.props;

        return (
            <section className = { Styles.bridge }>
                <h1>
                    <FormattedMessage
                        defaultMessage = { messages[ 'bridge-text-1' ] }
                        id = 'bridge-text-1'
                        tagName = 'span'
                        values = {{
                            ...profile,
                        }}
                    />
                </h1>
                <img src = { observatory } />
                <button onClick = { this._changeRoute(book.panel) }>
                    🖥 &nbsp;
                    <FormattedMessage
                        defaultMessage = { messages[ 'bridge-btn-1' ] }
                        id = 'bridge-btn-1'
                        tagName = 'span'
                    />
                </button>
            </section>
        );
    }
}
