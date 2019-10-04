const paginationHelper = (data) => {
	if (!data) return

	let paginatedData = {}  

	data.map((album, i) => {
		if(i < 20 ) {
			if(!paginatedData[1]) return paginatedData[1] = [album]
			return paginatedData[1].push(album)
		} 
		if(i < 40 ) {
			if(!paginatedData[2]) return paginatedData[2] = [album]
			return paginatedData[2].push(album)
		}
		if(i < 60) {
			if(!paginatedData[3]) return paginatedData[3] = [album]
			return paginatedData[3].push(album)
		}
		if(i < 80 ) {
			if(!paginatedData[4]) return paginatedData[4] = [album]
			return paginatedData[4].push(album)
		}
		if(i < 100 ) {
			if(!paginatedData[5]) return paginatedData[5] = [album]
			return paginatedData[5].push(album)
		}
		if(i < 120 ) {
			if(!paginatedData[6]) return paginatedData[6] = [album]
			return paginatedData[6].push(album)
		}
		if(i < 140 ) {
			if(!paginatedData[7]) return paginatedData[7] = [album]
			return paginatedData[7].push(album)
		}
		if(i < 160 ) {
			if(!paginatedData[8]) return paginatedData[8] = [album]
			return paginatedData[8].push(album)
		}
		if(i < 180 ) {
			if(!paginatedData[9]) return paginatedData[9] = [album]
			return paginatedData[9].push(album)
		}
		if(i < 200 ) {
			if(!paginatedData[10]) return paginatedData[10] = [album]
			return paginatedData[10].push(album)
		}
	})

	return paginatedData

}

export default paginationHelper