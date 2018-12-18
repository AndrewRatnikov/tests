// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import uk from 'react-intl/locale-data/uk';

addLocaleData([ ...uk, ...en ]);

@connect((state) => state.intl)
export class ConnectedIntlProvider extends Component {
    render() {
        return (
            <IntlProvider
                locale = { this.props.locale }
                messages = { this.props.messages }>
                {this.props.children}
            </IntlProvider>
        );
    }
}
