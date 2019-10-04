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
const initialState = { data: [],   loading: false,   error: '', selectedPage: 1};

export default function reduxSagaReducer(state = initialState, action) {   
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
			error:'',
			selectedPage: 1           
		};
	}
				
	case 'LOAD_ALBUNS_LOADING': {           
		return {               
			...state,               
			loading: true,               
			error:''           
		};
	}       
	case 'LOAD_ALBUNS_SUCCESS': {
		return {               
			...state,               
			data: action.data,               
			loading: false           
		}       
	}       
	case 'LOAD_ALBUNS_ERROR': {
		return {
			...state,
			loading: false,               
			error: action.error           
		};       
	}       
	case 'NEW_SELECTED_PAGE': {
		return {
			...state,
			selectedPage: action.payload.selectedPage,               
			error: action.error           
		};       
	}       
	default: {           
		return state;       
	}   
	}
}
