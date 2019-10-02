import React from 'react';
import SearchComponent from '../components/SearchComponent';
import AlbunsGrid from '../components/AlbunsGrid'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { connect } from 'react-redux';
import { NEW_SEARCH } from '../redux/actions/actions'

const Search = (props) => {
	const data = useSelector(state => state.data.results)
	console.log('dataha cara', data);
	return (
		<React.Fragment>
			<SearchWrapper>
				<h1>Album Search</h1>
				<SearchComponent />
				<SearchButton onClick={() => props.NEW_SEARCH()}>Search</SearchButton>
			</SearchWrapper>
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

const SearchWrapper = styled.div`
    text-align: center;
	margin-bottom: 10%
`

const SearchButton = styled.button`
    text-align: center;
    border: 1px solid white;
`

