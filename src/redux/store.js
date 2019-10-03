import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

import createSagaMiddleware from 'redux-saga';
import albunsSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(albunsSaga);

	return store
}