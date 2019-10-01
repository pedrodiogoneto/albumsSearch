const API_BASE_ADDRESS = 'https://itunes.apple.com/';

export default class api {
	static searchAlbuns(parameter) {
		console.log('******', parameter);  
		if(!parameter) return
		const encodedParameter = parameter.replace(' ', '+')

		const uri = `${API_BASE_ADDRESS}search?term=${encodedParameter}`
	
		return fetch(uri, {
			method: 'GET'       
		});   
	}
}
