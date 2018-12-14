// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';
import { fetchStarshipsAsync } from '../../bus/feed/actions';

// Components
import { StarshipTile } from '../StarshipTile';

const mapStateToProps = (state) => ({
    isFetching: state.ui.isFetching,
    starships:  state.feed.starships,
});

const mapDispatchToProps = {
    fetchStarshipsAsync,
};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export class Panel extends Component {
    static defaultProps = {
        isFetching: false,
    };

    _onClickHandler = () => {
        const { fetchStarshipsAsync, starships } = this.props;
        if (!starships.length) {
            fetchStarshipsAsync();
        }
    };

    render() {
        const { isFetching, starships, history } = this.props;

        const buttonMessage = isFetching ? '⏳ Вызываю...' : '📲 Вызвать корабли';

        return (
            <section className = { Styles.panel }>
                <h1>🖥</h1>
                <button
                    disabled = { isFetching }
                    onClick = { this._onClickHandler }>
                    {buttonMessage}
                </button>
                <ul>
                    {starships.map((starship) => (
                        <StarshipTile
                            history = { history }
                            key = { starship.created }
                            { ...starship }
                        />
                    ))}
                </ul>
            </section>
        );
    }
}
