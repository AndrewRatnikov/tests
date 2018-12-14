// core
import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

// instruments
import { startFetching, stopFetching, emitError } from '../../../ui/actions';
import { fillStarships } from '../../actions';

export function* fetchStarshipsAsync() {
    try {
        yield put(startFetching());

        const response = yield call(fetch, 'https://swapi.co/api/starships/');

        if (response.status !== 200) {
            throw new Error('Failed to load starships');
        }

        const result = yield call([ response, response.json ]);
        const starships = result.results;

        yield call(delay, 2000);
        yield put(fillStarships(starships));
    } catch (error) {
        yield put(emitError(error, 'fetchStarshipsAsync'));
    } finally {
        yield put(stopFetching());
    }
}
