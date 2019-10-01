import React from 'react';
import Search from './pages/Search';
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
//import configureStore from './redux/store';

import rootReducer from './redux/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import albunsSaga from "./redux/sagas/sagas";

const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(albunsSaga);


const App = () => (
	<Provider store={store}>
		<Wrapper>
			<Search />
		</Wrapper>
	</Provider>
);

export default App;

const Wrapper = styled.div`
	background-image: linear-gradient(white, #e6e6e6);
	padding: 10%
`