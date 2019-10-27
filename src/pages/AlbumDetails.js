import React from 'react';
import styled from 'styled-components'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
	useHistory,
	useLocation
} from "react-router-dom";

const AlbumDetails = (props) => {
	let history = useHistory();
	const { id } = useParams()
	const { state } = useLocation()

	return (
		<React.Fragment>
			<Button onClick={() => history.push('/')}>{'<'}</Button>
			<Wrapper>
				<img src={state.artworkUrl100} />
				<h1><a href={state.collectionViewUrl}>{state.collectionName}</a></h1>
				<h5><a href={state.artistViewUrl}>{state.artistName}</a></h5>
				<h6>{`Price: ${state.collectionPrice} ${state.currency}`}</h6>
				<h6>{`Style: ${state.primaryGenreName}`}</h6>
				<h6>{`Tracks: ${state.trackCount}`}</h6>
			</Wrapper>
		</React.Fragment>
	);
}


export default AlbumDetails

const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10%;

    & a {
        color: black;
        text-decoration: none;
    
    }
    & a:hover {
        color: black;
        text-decoration: none;
    
    }
`

const Button = styled.button`
    border: 0px;
    background-color: transparent;
    margin-bottom: 20px;
    font-size: 25pt
`