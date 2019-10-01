import React from 'react';
import Album from './Album'
import styled from 'styled-components'

const AlbunsGrid = (props) => {
	if(!props.data) return

	const renderAlbuns = () => props.data.map((album, i) => <Album album={album} key={i} />)

	return <Wrapper>{renderAlbuns()}</Wrapper>

}

export default AlbunsGrid;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`