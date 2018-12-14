// Core
import React, { Component } from 'react';
import { Field } from 'formik';

// instruments
import Styles from './styles.m.css';

export class ProfileForm extends Component {
    render() {
        const { handleSubmit, isSubmitting } = this.props;

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
                    ✅&nbsp;Update
                </button>
            </form>
        );
    }
}
