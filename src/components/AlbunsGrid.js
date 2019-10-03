import React, { Suspense } from 'react';
import styled from 'styled-components'

const Album = React.lazy(() => import('./Album'))

const AlbunsGrid = ({data, isGridPattern}) => {
    console.log(data, isGridPattern);
	if(!data) return

	const renderAlbuns = () => data.map((album, i) => <Album album={album} key={i} isGridPattern={isGridPattern}/>)

    const Wrapper = isGridPattern ? GridWrapper : ColWrapper

	return (
        <Suspense fallback={<div>Loading...</div>}>
            <Wrapper>{renderAlbuns()}</Wrapper>
        </Suspense>
    )
}

export default AlbunsGrid;

const GridWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`

const ColWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`