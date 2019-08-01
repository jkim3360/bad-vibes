/*eslint-disable*/

import React from 'react'
import { Link } from 'react-router-dom'
// import './images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'

export default function SearchResultsList(props) {

  return (
    <div className='search-result-container' key='search-result-container'>
      {/* <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={true}
            ></ScrollArea> */}

      {props.searchResults ? props.searchResults.map(item => {
        const { artworkUrl100,
          artistName,
          kind, trackName,
          primaryGenreName,
          trackId,
          longDescription,
          collectionName,
          trackPrice,
          previewUrl } = item

        return (
          <div className="search-result-item-container" key={trackId}>
            <div className='album-artwork'>
              <img src={artworkUrl100}
                alt={artworkUrl100} />
            </div><br />
            <div className='track-artist-container'>
              <div className='song-link' ><Link to={{
                pathname: `/song_id_${trackId}`,
                state: {
                  song: item,
                  artistName: item.artistName,
                  trackName: item.trackName,
                  collectionName: item.collectionName,
                  longDescription: item.longDescription,
                  favorites: []
                }
              }}>{`${trackName}`}</Link></div>
              <div className='artist-name' >{artistName}</div>
            </div>
            {/* <img src="./images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"/> */}
          </div>
        )
      }) : <h1>Loading...</h1>}



    </div>
  )
}
