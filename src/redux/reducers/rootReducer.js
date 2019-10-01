/* export default (state = {}, action) => {
	console.log(state, action);
	switch (action.type) {
	case 'SIMPLE_ACTION':
		return {
			result: action.payload
		}
	case 'newSearch': 
		return {
			result: 'newSearch'
		}
	default:
		return state
	}
} */

import {UPDATE_INPUT_VALUE, NEW_SEARCH, LOAD_ALBUNS_ERROR, LOAD_ALBUNS_LOADING, LOAD_ALBUNS_SUCCESS} from "../actions/actions";
const initialState = {   data: [],   loading: false,   error: ''};

export default function reduxSagaReducer(state = initialState, action) {   
	console.log(action, state);
	switch (action.type) {
	case 'UPDATE_INPUT_VALUE': {
		return {
			...state,
			searchInput: action.searchInput,
			loading: false,
			error:''
		};
	}
	case 'NEW_SEARCH': {
		return {
			...state,
			loading: true,               
			error:''           
		};
	}
				
	case LOAD_ALBUNS_LOADING: {           
		return {               
			...state,               
			loading: true,               
			error:''           
		};
	}       
	case LOAD_ALBUNS_SUCCESS: {           
		return {               
			...state,               
			data: action.data,               
			loading: false           
		}       
	}       
	case LOAD_ALBUNS_ERROR: {
		return {
			...state,
			loading: false,               
			error: action.error           
		};       
	}       
	default: {           
		return state;       
	}   
	}
}
