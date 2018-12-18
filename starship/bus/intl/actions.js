// Types
import { SET_LOCALE } from './types';

// Instruments
import { messages } from './messages';

export const setLocale = (nextLocale) => ({
    type:    SET_LOCALE,
    payload: {
        locale:   nextLocale,
        messages: messages[ nextLocale ],
    },
});
