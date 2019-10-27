import React from 'react';
import Search from './pages/Search';
import AlbumDetails from './pages/AlbumDetails';
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './redux/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import albunsSaga from "./redux/sagas/sagas";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './redux/store'

const App = () => (
	<Provider store={configureStore()}>
		<Router>
			<Wrapper>
				<Switch>
					<Route path="/:id">
						<AlbumDetails />
					</Route>
					<Route path="/">
						<Search />
					</Route>
				</Switch>
			</Wrapper>
		</Router>
	</Provider>
);

export default App;

const Wrapper = styled.div`
	background-image: linear-gradient(#ececec94, #2c3e5091);
	padding: 10%;
	height: 100%;
	min-height: 100vh;
`

