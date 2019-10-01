import React from 'react';
import styled from 'styled-components'

const Album = ({ album }) => {
	return (
		<Wrapper>
			<AlbumImage src={album.artworkUrl60}/>
			<AlbumName>{album.artistName}</AlbumName>
			<AlbumArtist>{album.artistName}</AlbumArtist>
		</Wrapper>
	);
}

export default Album;

const Wrapper = styled.div`
    border-radius: 5%;
    padding: 5%;
    background-color: white;
`

const AlbumImage = styled.img`

`

const AlbumName = styled.p`

`

const AlbumArtist = styled.p`

`