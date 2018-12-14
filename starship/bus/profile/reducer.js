// Instruments
import { FILL_PROFILE } from './types';

const initialState = {
    firstName: 'Dart',
    lastName:  'Weider',
};

export const profileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILL_PROFILE:
            return { ...state, ...payload };

        default:
            return state;
    }
};
