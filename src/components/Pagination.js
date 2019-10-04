import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import { NEW_SELECTED_PAGE } from '../redux/actions/actions'


const Pagination = (props) => {
	if(!props.data) return
    
	const renderPaginataion = () => Object.keys(props.data).map(page => <PageNumber onClick={()=> props.NEW_SELECTED_PAGE(page)} key={page}>{page}</PageNumber>)
    
	return (
		<PaginationWrapper>
			{props.selectedPage !== 1 && 
                <PageNumber onClick={()=> props.NEW_SELECTED_PAGE(props.selectedPage - 1)}>{'<'}</PageNumber>
			}

			{renderPaginataion()}
			
			{Number(props.selectedPage) !== Math.max(...Object.keys(props.data)) && 
                <PageNumber onClick={()=> props.NEW_SELECTED_PAGE(props.selectedPage + 1)}>{'>'}</PageNumber>
			}
		</PaginationWrapper>
	);
}

const mapDispatchToProps = dispatch => ({
	NEW_SELECTED_PAGE: (selectedPage) => dispatch(NEW_SELECTED_PAGE(selectedPage))
})

const mapStateToProps = state => ({
	selectedPage: state.selectedPage
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

const PageNumber = styled.div`
    font-size: 12pt;
    margin-right: 3%;

`

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
`