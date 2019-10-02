import React, { useState } from 'react';
import SearchComponent from '../components/SearchComponent';
import AlbunsGrid from '../components/AlbunsGrid'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { connect } from 'react-redux';
import { NEW_SEARCH } from '../redux/actions/actions'

const Search = (props) => {
	const [areResultsShowing, setAreResultsShowing] = useState(false)

	const handleOnSearchClick = () => {
		setAreResultsShowing(true)
		return props.NEW_SEARCH()
	}

	const data = useSelector(state => state.data.results)
	const PositionedSearchWrapper = areResultsShowing ? TopSearchWrapper : CenteredSearchWrapper

	return (
		<React.Fragment>
			<PositionedSearchWrapper>
				<Title areResultsShowing={areResultsShowing}>ALBUM SEARCH</Title>
				<div>
					<SearchComponent areResultsShowing={areResultsShowing} />
					<SearchButton onClick={() => handleOnSearchClick()}>Search</SearchButton>
				</div>
			</PositionedSearchWrapper>
			{data && <AlbunsGrid data={data}/>}
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