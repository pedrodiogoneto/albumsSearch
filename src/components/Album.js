import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

const Album = ({ album, isGridPattern }) => {

	let history = useHistory();
    
	return (
		<Wrapper isGridPattern={isGridPattern}>
			<InnerWrapper isGridPattern={isGridPattern}>
				<Front>
					<AlbumImage src={album.artworkUrl100} isGridPattern={isGridPattern}/>
					<TextWrapper>
						<AlbumArtist isGridPattern={isGridPattern}>{album.artistName}</AlbumArtist>
						<AlbumName isGridPattern={isGridPattern}>{album.collectionName}</AlbumName>
					</TextWrapper>
				</Front>
				<Back>
					<InfoButton onClick={() => history.push({ pathname: `/${album.collectionId}`, state: album})}>
                        + Info
					</InfoButton>
				</Back>
			</InnerWrapper>
		</Wrapper>
	);
}
export default Album;


const InnerWrapper = styled.div`
    transition: transform 0.8s;
    transform-style: preserve-3d;
    border-radius: ${props => props.isGridPattern ? '5%' : '1%'};
    display: ${props => props.isGridPattern ? '' : 'flex'};
    min-width: ${props => props.isGridPattern ? '125px' : '300px'};
`

const Front = styled.div`
    backface-visibility: hidden;

`
const Back = styled.div`
    backface-visibility: hidden;
    transform: rotateY(180deg);
    display: none;
`

const Wrapper = styled.div`
    border-radius: ${props => props.isGridPattern ? '5%' : '1%'};
    background-color: white;
    width: ${props => props.isGridPattern ? '20%' : '50%'};
    margin-right: 1%;
    margin-bottom: 5%;
    box-shadow: 2px 9px 19px -9px rgba(0,0,0,0.75);
    display: ${props => props.isGridPattern ? '' : 'flex'};
    min-width: ${props => props.isGridPattern ? '125px' : '300px'};
    perspective: 1000px;

    &:hover ${InnerWrapper} {
        transform: rotateY(180deg);
    }
    &:hover ${Front} {
        display: none
    }
    &:hover ${Back} {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40%;
    }
    &:hover {
        background-color: #80808040;
    }
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

const InfoButton = styled.button`
    padding: 20%;
    border: 0px;
    background-color: transparent;
`