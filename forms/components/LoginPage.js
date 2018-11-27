// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Formik } from 'formik';
import { Transition } from 'react-transition-group';

// Instruments
import Styles from './styles.m.css';
import { delay, schema, saveDataToLocalStorage, loadDataFromLocalStorage } from '../helpers';

// Components
import { LoginForm } from './LoginForm';

const duration = 500;

const loggedBlockStyles = {
    transition: `opacity ${duration}ms`,
    opacity: 0,
};

const loggedBlockTransitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
};

@hot(module)
export class LoginPage extends Component {
    state = {
        initialValues: {
            email: '',
            password: '',
        },
        showLoggedBlock: false,
    }

    componentDidMount() {
        const initialValues = loadDataFromLocalStorage();
        this.setState({ initialValues });
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    timeout = null;

    _submitForm = (values, actions) => {
        if (values.remember) {
            saveDataToLocalStorage(values);
        }
        delay(2000).then(() => {
            console.log('submit ', values);
            actions.setSubmitting(false);
            this.setState({ showLoggedBlock: true });
            this._timeoutForLoggedBlock();
        });
    };

    _timeoutForLoggedBlock = () => {
        this.timeout = setTimeout(() => {
            this.setState({ showLoggedBlock: false });
        }, 5000);
    };

    render() {
        const { initialValues, showLoggedBlock } = this.state;

        return (
            <section className = { Styles.loginPage }>
                <Formik
                    initialValues = { initialValues }
                    validationSchema = { schema }
                    onSubmit = { this._submitForm }
                >
                    {
                        (props) => (<LoginForm { ...props } />)
                    }
                </Formik>
                <Transition
                    in = { showLoggedBlock }
                    timeout = { duration }
                >
                    {
                        (state) => (
                            <div
                                className = { Styles.loginMessage }
                                style = {{
                                    ...loggedBlockStyles,
                                    ...loggedBlockTransitionStyles[ state ],
                                }}
                            >
                                Logged
                            </div>
                        )
                    }
                </Transition>
            </section>
        );
    }
}
