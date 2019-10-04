import React, { useState, useEffect } from 'react';
import SearchComponent from '../components/SearchComponent';
import AlbunsGrid from '../components/AlbunsGrid'
import Pagination from '../components/Pagination'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

import switchIcon from '../switch.png'

import { connect } from 'react-redux';
import { NEW_SEARCH } from '../redux/actions/actions'

const Search = (props) => {
	const [areResultsShowing, setAreResultsShowing] = useState(false)
	const [isGridPattern, setIsGridPattern] = useState(true)
	const [page, setPage] = useState(1)
	const data = useSelector(state => state.data.results)

	useEffect(() => setPage(props.selectedPage), [props.selectedPage]);

	const handleOnSearchClick = () => {
		setAreResultsShowing(true)
		return props.NEW_SEARCH()
	}

	const PositionedSearchWrapper = areResultsShowing ? TopSearchWrapper : CenteredSearchWrapper
	const { loading } = props
	return (
		<React.Fragment>
			<PositionedSearchWrapper>
				<Title areResultsShowing={areResultsShowing}>ALBUM SEARCH</Title>
				<div>
					<SearchComponent areResultsShowing={areResultsShowing} />
					<SearchButton onClick={() => handleOnSearchClick()}>Search</SearchButton>
				</div>
				{data && <button onClick={() => setIsGridPattern(!isGridPattern)}><ImageSwitch src={switchIcon} alt={'switch'}/></button>}
			</PositionedSearchWrapper>
			
			{loading &&
				<SpinnerWrapper>
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				</SpinnerWrapper>}
			
			{!loading && data && <AlbunsGrid data={data[page]} isGridPattern={isGridPattern}/>}

			{!loading && data && <Pagination data={data} />}

			{!loading && data === null && <p>I'm Sorry, we couldn't find what you're looking for</p>}
		</React.Fragment>
	);
}

const mapDispatchToProps = dispatch => ({
	NEW_SEARCH: () => dispatch(NEW_SEARCH())
})

const mapStateToProps = state => ({
	data: state.data, 
	loading: state.loading, 
	error: state.error,
	selectedPage: state.selectedPage
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
    border: 2px solid white;
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

const ImageSwitch = styled.img`
	width: 25%;
    margin-top: -5%;
`