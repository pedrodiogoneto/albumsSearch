import React from 'react';
import styled from 'styled-components'

const Album = ({ album }) => {
	return (
		<Wrapper>
			<AlbumImage src={album.artworkUrl100}/>
			<TextWrapper>
				<AlbumArtist>{album.artistName}</AlbumArtist>
				<AlbumName>{album.collectionName}</AlbumName>
			</TextWrapper>
		</Wrapper>
	);
}

export default Album;

const Wrapper = styled.div`
    border-radius: 5%;
    background-color: white;
    width: 20%
    margin-right: 1%;
    margin-bottom: 5%;
    box-shadow: 2px 9px 19px -9px rgba(0,0,0,0.75);
`

const AlbumImage = styled.img`
    width: 100%;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
`

const TextWrapper = styled.div`
    padding: 5%
`

const AlbumArtist = styled.p`
    color: grey;
    font-size: 8pt;
    text-overflow: ellipsis;
    margin: 0px
`

const AlbumName = styled.p`
    text-overflow: ellipsis;
    margin: 3% 0px 3%;
    font-size: 10pt;
`
