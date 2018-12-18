// Core
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';

@connect((state) => state.intl)
export class StarshipTile extends Component {
    _navigateToStarship = () => {
        const { history, name } = this.props;
        history.push(`/panel/${name.replace(/ /g, '-').toLowerCase()}`);
    };

    render() {
        const { name, crew, manufacturer, starship_class: starshipClass, messages } = this.props;

        return (
            <section
                className = { Styles.starshipTile }
                onClick = { this._navigateToStarship }>
                <h1>🛸</h1>
                <div className = { Styles.description }>
                    <div>
                        <FormattedMessage
                            defaultMessage = { messages[ 'starship-tile-1' ] }
                            description = 'name'
                            id = 'starship-tile-1'
                            tagName = 'span'
                        />
                        <span>
                            &nbsp;
                            {name}
                        </span>
                    </div>
                    <div>
                        <FormattedMessage
                            defaultMessage = { messages[ 'starship-tile-2' ] }
                            description = 'class'
                            id = 'starship-tile-2'
                            tagName = 'span'
                        />
                        <span>
                            &nbsp;
                            {starshipClass}
                        </span>
                    </div>
                    <div>
                        <FormattedMessage
                            defaultMessage = { messages[ 'starship-tile-3' ] }
                            description = 'manufacturer'
                            id = 'starship-tile-3'
                            tagName = 'span'
                        />
                        <span>
                            &nbsp;
                            {manufacturer}
                        </span>
                    </div>
                    <div>
                        <FormattedMessage
                            defaultMessage = { messages[ 'starship-tile-4' ] }
                            description = 'crew'
                            id = 'starship-tile-4'
                            tagName = 'span'
                        />
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
