const API_BASE_ADDRESS = 'https://itunes.apple.com/';

export default class api {
	static searchAlbuns(parameter) {
		if(!parameter) return
		const encodedParameter = parameter.replace(' ', '+')

		const uri = `${API_BASE_ADDRESS}search?term=${encodedParameter}&limit=200&entity=album`
	
		return fetch(uri, {
			method: 'GET'       
		});   
	}
}
