// Core
import { createStore, applyMiddleware } from 'redux';

// Instruments
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { composeEnhancers, middleware, sagaMiddleware } from './middleware';
import { messages } from '../bus/intl/messages';

export const store = createStore(
    rootReducer,
    {
        intl: {
            locale:   'en',
            messages: messages.en,
        },
    },
    composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);
