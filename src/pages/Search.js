import React, { useState } from 'react';
import SearchComponent from '../components/SearchComponent';
import AlbunsGrid from '../components/AlbunsGrid'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

import { connect } from 'react-redux';
import { NEW_SEARCH } from '../redux/actions/actions'

const Search = (props) => {
	const [areResultsShowing, setAreResultsShowing] = useState(false)
	const [isGridPattern, setIsGridPattern] = useState(true)

	const data = useSelector(state => state.data.results)

	const handleOnSearchClick = () => {
		setAreResultsShowing(true)
		return props.NEW_SEARCH()
	}

	const PositionedSearchWrapper = areResultsShowing ? TopSearchWrapper : CenteredSearchWrapper

	return (
		<React.Fragment>
			<PositionedSearchWrapper>
				<Title areResultsShowing={areResultsShowing}>ALBUM SEARCH</Title>
				<div>
					<SearchComponent areResultsShowing={areResultsShowing} />
					<SearchButton onClick={() => handleOnSearchClick()}>Search</SearchButton>
				</div>
				{data && <button onClick={() => setIsGridPattern(!isGridPattern)}>Change Dir</button>}
			</PositionedSearchWrapper>
			
			{props.loading &&
				<SpinnerWrapper>
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				</SpinnerWrapper>}
			
			{!props.loading && data && <AlbunsGrid data={data} isGridPattern={isGridPattern}/>}
		</React.Fragment>
	);
}

const mapDispatchToProps = dispatch => ({
	NEW_SEARCH: () => dispatch(NEW_SEARCH())
})

const mapStateToProps = state => ({
	data: state.data, 
	loading: state.loading, 
	error: state.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)

const CenteredSearchWrapper = styled.div`
    text-align: center;
	margin-bottom: 10%
`

const TopSearchWrapper = styled.div`
	margin-bottom: 10%
	display: flex;
	align-items: flex-start;
    justify-content: space-between;
`

const SearchButton = styled.button`
    text-align: center;
    border: 1px solid white;
`

const Title = styled.p`
	font-size: ${props => props.areResultsShowing ? '14pt' : '25pt'};
	font-weight: 600;
	margin: ${props => props.areResultsShowing ? '0px' : '5%'};
`

const SpinnerWrapper = styled.div`
	text-align: center;
	margin-top: 10%
`