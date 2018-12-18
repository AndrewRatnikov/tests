// Types
import { SET_LOCALE } from './types';

const initialState = {
    locale:   '',
    messages: {},
};

export const intlReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOCALE:
            return {
                locale:   payload.locale,
                messages: payload.messages,
            };
        default:
            return state;
    }
};
