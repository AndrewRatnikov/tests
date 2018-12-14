// Core
import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';
import { fillProfile } from '../../bus/profile/actions';

// Components
import { ProfileForm } from './ProfileForm';

const mapStateToProps = (state) => ({
    profile: state.profile,
});

const mapDispatchToProps = {
    fillProfile,
};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export class Profile extends Component {
    static defaultProps = {
        profile: {
            firstName: 'Имя',
            lastName:  'Фамилия',
        },
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    timer = null;

    _submitForm = (values, actions) => {
        const {
            profile: { firstName, lastName },
        } = this.props;

        if (firstName === values.firstName && lastName === values.lastName) {
            actions.setSubmitting(false);

            return;
        }

        this.timer = setTimeout(() => {
            this.props.fillProfile(values);
            actions.setSubmitting(false);
        }, 2000);
    };

    render() {
        const {
            profile: { firstName, lastName },
        } = this.props;

        return (
            <section className = { Styles.profile }>
                <h1>
                    👩🏼‍🚀 {firstName} {lastName}
                </h1>
                <Formik
                    initialValues = {{ firstName, lastName }}
                    onSubmit = { this._submitForm }>
                    {(props) => <ProfileForm { ...props } />}
                </Formik>
            </section>
        );
    }
}
