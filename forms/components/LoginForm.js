// Core
import React, { Component } from 'react';
import { Field } from 'formik';
import classNames from 'classnames';

// Instruments
import Styles from './styles.m.css';

export class LoginForm extends Component {
    render() {
        const {
            handleSubmit,
            isSubmitting,
            errors,
            touched,
        } = this.props;
        const emailClassName = classNames({ [Styles.invalidInput]: errors.email && touched.email });
        const passwordClassName = classNames({ [Styles.invalidInput]: errors.password && touched.password });
        const btnClassName = classNames({ [Styles.disabled]: isSubmitting });

        return (
            <form onSubmit = { handleSubmit }>
                <Field
                    name="email"
                    type="email"
                    className = { emailClassName }
                />
                <Field
                    name = 'password'
                    type = 'password'
                    className = { passwordClassName }
                />
                <label>
                    <Field name = 'remember' type = 'checkbox' />
                    Remember me
                </label>
                <button
                    className = { btnClassName }
                    disabled = { isSubmitting }
                    type = 'submit'
                >
                    Submit
                </button>
            </form>
        );
    }
}
