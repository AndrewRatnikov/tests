// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export class StarshipTile extends Component {
    _navigateToStarship = () => {
        const { history, name } = this.props;
        history.push(`/panel/${name.replace(/ /g, '-').toLowerCase()}`);
    };

    render() {
        const { name, crew, manufacturer, starship_class: starshipClass } = this.props;

        return (
            <section
                className = { Styles.starshipTile }
                onClick = { this._navigateToStarship }>
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
