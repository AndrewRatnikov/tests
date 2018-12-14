// Core
import { combineReducers } from 'redux';

// Reducers
import { feedReducer as feed } from '../bus/feed/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    feed,
    profile,
    ui,
});
