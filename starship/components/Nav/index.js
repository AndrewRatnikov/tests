// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Instruments
import Styles from './styles.m.css';
import { book } from '../../routes/book';
import { setLocale } from '../../bus/intl/actions';

@connect(
    (state) => state.intl,
    { setLocale },
)
export class Nav extends Component {
    changeRoute = (route) => () => {
        this.props.history.push(route);
    };

    _setLocaleEn = () => {
        const { setLocale } = this.props;
        setLocale('en');
    };

    _setLocaleUk = () => {
        const { setLocale } = this.props;
        setLocale('uk');
    };

    render() {
        const {
            location: { pathname },
            locale,
            messages,
        } = this.props;

        return (
            <section className = { Styles.nav }>
                {pathname !== book.root && (
                    <>
                        <button
                            className = { Styles.bridge }
                            type = 'button'
                            onClick = { this.changeRoute(book.root) }>
                            🛸&nbsp;
                            <FormattedMessage
                                defaultMessage = { messages[ 'nav-btn-1' ] }
                                id = 'nav-btn-1'
                                tagName = 'span'
                            />
                        </button>
                        <button
                            type = 'button'
                            onClick = { this.changeRoute(book.profile) }>
                            👽&nbsp;
                            <FormattedMessage
                                defaultMessage = { messages[ 'nav-btn-2' ] }
                                id = 'nav-btn-2'
                                tagName = 'span'
                            />
                        </button>
                        <button
                            type = 'button'
                            onClick = { this.changeRoute(book.panel) }>
                            🎮&nbsp;
                            <FormattedMessage
                                defaultMessage = { messages[ 'nav-btn-3' ] }
                                id = 'nav-btn-3'
                                tagName = 'span'
                            />
                        </button>
                    </>
                )}
                {locale === 'en' ? (
                    <button
                        className = { Styles.locBtn }
                        onClick = { this._setLocaleUk }>
                        🇺🇦 Укр
                    </button>
                ) : (
                    <button
                        className = { Styles.locBtn }
                        onClick = { this._setLocaleEn }>
                        🇬🇧 Eng
                    </button>
                )}
            </section>
        );
    }
}
