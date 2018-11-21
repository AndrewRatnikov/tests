import React, { Component } from 'react';

export const withState = (
    { stateName, updateState, initialValue } = { stateName: 'value', updateState: 'updateValue', initialValue: 0 },
) => (Enchanceble) => {
    return class extends Component {
        state = {
            [ stateName ]: initialValue,
        };

        [ updateState ] = () => {
            this.setState((prevState) => ({ [ stateName ]: prevState[ stateName ] + 1 }));
        };

        render() {
            const props = {
                [ stateName ]:   this.state[ stateName ],
                [ updateState ]: this[ updateState ],
            };

            return <Enchanceble { ...props } />;
        }
    };
};
