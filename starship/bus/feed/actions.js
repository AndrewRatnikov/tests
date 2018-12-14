// Types
import { FILL_STARSHIPS, FETCH_STARSHIPS_ASYNC } from './types';

export const fillStarships = (starships) => ({
    type:    FILL_STARSHIPS,
    payload: starships,
});

export const fetchStarshipsAsync = () => ({
    type: FETCH_STARSHIPS_ASYNC,
});
