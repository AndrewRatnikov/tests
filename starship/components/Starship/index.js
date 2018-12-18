// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Instruments
import Styles from './styles.m.css';
import { selectStarship } from '../../bus/feed/selector';

const mapStateToProps = (state) => ({
    starships: state.feed.starships,
    ...state.intl,
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
        const { messages } = this.props;

        if (!name) {
            return null;
        }

        return (
            <section className = { Styles.starship }>
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
                            defaultMessage = { messages[ 'starship-1' ] }
                            description = 'model'
                            id = 'starship-1'
                            tagName = 'span'
                        />
                        <span>
                            &nbsp;
                            {model}
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
