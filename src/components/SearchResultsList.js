/*eslint-disable*/

import React from 'react'
import { Link } from 'react-router-dom'
import appleBadge from './images/apple-badge.svg'

export default function SearchResultsList(props) {
  return (
    <div className='search-result-container' key='search-result-container'>
      {props.searchResults ? props.searchResults.map(item => {
        const { artworkUrl100,
          artistName,
          trackName,
          trackId,
          trackViewUrl } = item
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
              <div className='artist-name' key={trackId}>{artistName}</div>
              <div><a href={trackViewUrl} target="_blank"><img src={appleBadge} className="apple-badge" alt="badge" /></a></div>
            </div>
          </div>
        )
      }) : <h1>Loading...</h1>}
    </div>
  )
}
