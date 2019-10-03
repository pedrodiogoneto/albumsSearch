export const UPDATE_INPUT_VALUE = (data) => {
	return { 
		type: 'UPDATE_INPUT_VALUE', 
		searchInput: data
	}
};

export const NEW_SEARCH = (data) => {
	return {
		type: 'NEW_SEARCH',
		payload: data,
		loading: true
	}
}

export const LOAD_ALBUNS_LOADING = () => {
	return {
		type: 'LOAD_ALBUNS_LOADING',
		payload: {
			loading: true
		}
	}
}
export const LOAD_ALBUNS_ERROR = (error) => {
	return {
		type: 'LOAD_ALBUNS_ERROR',
		payload: {
			loading: false,
			error: error
		}
	}
}
export const LOAD_ALBUNS_SUCCESS = () => {
	return {
		type: 'LOAD_ALBUNS_SUCCESS',
		payload: {
			loading: false
		}
	}
}

