import React from 'react';
import { connect } from 'react-redux';

import { NEW_SELECTED_PAGE } from '../redux/actions/actions'


const Pagination = (props) => {
	if(!props.data) return
    
	const renderPaginataion = () => Object.keys(props.data).map(page => <div onClick={()=> props.NEW_SELECTED_PAGE(page)} key={page}>{page}</div>)
    
	return (
		<div>
			{renderPaginataion()}
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	NEW_SELECTED_PAGE: (selectedPage) => dispatch(NEW_SELECTED_PAGE(selectedPage))
})

const mapStateToProps = state => ({
	selectedPage: state.selectedPage
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)