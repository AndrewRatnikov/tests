// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'formik';
import { FormattedMessage } from 'react-intl';

// instruments
import Styles from './styles.m.css';

@connect((state) => state.intl)
export class ProfileForm extends Component {
    render() {
        const { handleSubmit, isSubmitting, messages } = this.props;

        return (
            <form onSubmit = { handleSubmit }>
                <Field
                    name = 'firstName'
                    type = 'text'
                />
                <Field
                    name = 'lastName'
                    type = 'text'
                />
                <button
                    className = { isSubmitting ? Styles.disabled : '' }
                    disabled = { isSubmitting }
                    type = 'submit'>
                    {isSubmitting ? (
                        <FormattedMessage
                            defaultMessage = { messages[ 'profile-2' ] }
                            description = 'updating'
                            id = 'profile-2'
                            tagName = 'span'
                        />
                    ) : (
                        <FormattedMessage
                            defaultMessage = { messages[ 'profile-1' ] }
                            description = 'update'
                            id = 'profile-1'
                            tagName = 'span'
                        />
                    )}
                </button>
            </form>
        );
    }
}
