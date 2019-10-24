import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useHistory,
    useLocation
  } from "react-router-dom";

import { connect } from 'react-redux';

const AlbumDetails = (props) => {
	let history = useHistory();

    const { id } = useParams()
    const { state } = useLocation()

    console.log('açsjhdflkajshdfkljh', state)
	return (
		<React.Fragment>
            <button onClick={() => history.push('/')}>Back!!!!</button>
            <h1>{`este é o caralho do id: ${id}`}</h1>
		</React.Fragment>
	);
}

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({

    
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails)