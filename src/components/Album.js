import React from 'react';
import styled from 'styled-components'

const Album = ({ album, isGridPattern }) => {
	return (
		<Wrapper isGridPattern={isGridPattern}>
			<AlbumImage src={album.artworkUrl100} isGridPattern={isGridPattern}/>
			<TextWrapper>
				<AlbumArtist isGridPattern={isGridPattern}>{album.artistName}</AlbumArtist>
				<AlbumName isGridPattern={isGridPattern}>{album.collectionName}</AlbumName>
			</TextWrapper>
		</Wrapper>
	);
}

export default Album;

const Wrapper = styled.div`
    border-radius: ${props => props.isGridPattern ? '5%' : '1%'};
    background-color: white;
    width: ${props => props.isGridPattern ? '20%' : '50%'};
    margin-right: 1%;
    margin-bottom: 5%;
    box-shadow: 2px 9px 19px -9px rgba(0,0,0,0.75);
    display: ${props => props.isGridPattern ? '' : 'flex'};
`

const AlbumImage = styled.img`
    width: ${props => props.isGridPattern ? '100%' : ''};
    min-width: ${props => props.isGridPattern ? '' : '40%'};
    border-top-left-radius: ${props => props.isGridPattern ? '5%' : '1%'};
    border-top-right-radius: ${props => props.isGridPattern ? '5%' : '0%'};
    border-bottom-left-radius: ${props => props.isGridPattern ? '0%' : '1%'};
`

const TextWrapper = styled.div`
    padding: 5%
`

const AlbumArtist = styled.p`
    color: grey;
    font-size: ${props => props.isGridPattern ? '8pt' : '10pt'};
    text-overflow: ellipsis;
    margin: 0px
`

const AlbumName = styled.p`
    text-overflow: ellipsis;
    margin: 3% 0px 3%;
    font-size: ${props => props.isGridPattern ? '10pt' : '12pt'};
`
