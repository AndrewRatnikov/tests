// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';
import { selectStarship } from '../../bus/feed/selector';

const mapStateToProps = (state) => ({
    starships: state.feed.starships,
});

@connect(mapStateToProps)
export class Starship extends Component {
    constructor(props) {
        super(props);

        const {
            location: { pathname },
            starships,
        } = props;

        this.state = {
            starship: selectStarship(starships, pathname),
        };
    }

    render() {
        const {
            starship: { name, model, manufacturer, crew, starship_class: starshipClass },
        } = this.state;

        if (!name) {
            return null;
        }

        return (
            <section className = { Styles.starship }>
                <h1>🛸</h1>
                <div className = { Styles.description }>
                    <div>
                        <span>Name:</span>
                        <span>
                            &nbsp;
                            {name}
                        </span>
                    </div>
                    <div>
                        <span>Model:</span>
                        <span>
                            &nbsp;
                            {model}
                        </span>
                    </div>
                    <div>
                        <span>Class:</span>
                        <span>
                            &nbsp;
                            {starshipClass}
                        </span>
                    </div>
                    <div>
                        <span>Manufacturer:</span>
                        <span>
                            &nbsp;
                            {manufacturer}
                        </span>
                    </div>
                    <div>
                        <span>Crew:</span>
                        <span>
                            &nbsp;
                            {crew}
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}
