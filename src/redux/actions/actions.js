/* export const UPDATE_INPUT_VALUE = (value) => dispatch => {
	dispatch({
		type: 'UPDATE_INPUT_VALUE',
		payload: value
	})
} */

export const UPDATE_INPUT_VALUE = (data) => {
	return { 
		type: 'UPDATE_INPUT_VALUE', 
		searchInput: data
	}
};

export const NEW_SEARCH = (data) => {
	return {
		type: 'NEW_SEARCH',
		payload: data
	}
}


export const LOAD_ALBUNS_ERROR = () => dispatch => {
	dispatch({
		type: 'LOAD_ALBUNS_ERROR',
		payload: {
			loading: false
		}
	})
}

export const LOAD_ALBUNS_LOADING = () => dispatch => {
	dispatch({
		type: 'LOAD_ALBUNS_LOADING',
		payload: {
			loading: true
		}
	})
}

export const LOAD_ALBUNS_SUCCESS = () => dispatch => {
	dispatch({
		type: 'LOAD_ALBUNS_SUCCESS',
		payload: {
			loading: false
		}
	})
}

