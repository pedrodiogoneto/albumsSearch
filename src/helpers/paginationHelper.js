const paginationHelper = (data) => {
	if (!data) return

	let paginatedData = {}  

	const addAlbum = (i, album) => {
		if(!paginatedData[i]) return paginatedData[i] = [album]
		return paginatedData[i].push(album)
	}

	data.map((album, i) => {
		if(i < 20 ) return addAlbum(1, album)
		if(i < 40 ) return addAlbum(2, album)
		if(i < 60 ) return addAlbum(3, album)
		if(i < 80 ) return addAlbum(4, album)
		if(i < 100 ) return addAlbum(5, album)
		if(i < 120 ) return addAlbum(6, album)
		if(i < 140 ) return addAlbum(7, album)
		if(i < 160 ) return addAlbum(8, album)
		if(i < 180 ) return addAlbum(9, album)
		if(i < 200 ) return addAlbum(10, album)
	})

	console.log(paginatedData);
	return paginatedData
}

export default paginationHelper