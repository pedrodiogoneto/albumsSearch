import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { UPDATE_INPUT_VALUE } from '../redux/actions/actions'

const SearchComponent = ({ areResultsShowing, UPDATE_INPUT_VALUE, searchInput }) => {
	return <InputField areResultsShowing={areResultsShowing} onChange={(e) => UPDATE_INPUT_VALUE(e.target.value)} value={searchInput}/>
}

const mapDispatchToProps = dispatch => ({
	UPDATE_INPUT_VALUE: (value) => dispatch(UPDATE_INPUT_VALUE(value))
})

const mapStateToProps = state => ({
	...state
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

const InputField = styled.input`
    width: ${props => props.areResultsShowing ? '70%' :'60%' }
`