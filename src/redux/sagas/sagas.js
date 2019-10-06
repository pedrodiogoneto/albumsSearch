import { put, takeLatest, select, takeEvery } from 'redux-saga/effects'
import {NEW_SEARCH, LOAD_ALBUNS_ERROR, LOAD_ALBUNS_LOADING, LOAD_ALBUNS_SUCCESS} from "../actions/actions";
import api from '../api'
import paginationHelper from '../../helpers/paginationHelper'

async function fetchAsync(func, data) {
	const response = await func(data);
	if (response.ok) return await response.json();
	throw new Error("Unexpected error!!!");
}

function* fetchAlbuns() {
	try {
		yield put({type: 'LOAD_ALBUNS_LOADING' });   
		const data = yield select(state => state.searchInput)
		let albuns = yield fetchAsync(api.searchAlbuns, data);
		if (albuns.resultCount === 0) {
			albuns.results = null
		} else {
			albuns.results = paginationHelper(albuns.results)
		}
		yield put({type: 'LOAD_ALBUNS_SUCCESS', data: albuns});
	} catch (e) {
		yield put({type: 'LOAD_ALBUNS_ERROR', error: e.message});
	}
}

export function* albunsSaga() {
	yield takeLatest('NEW_SEARCH', fetchAlbuns)
}

export default albunsSaga;
