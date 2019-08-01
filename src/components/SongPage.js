/*eslint-disable*/

import React, { useState } from 'react'
import Player from './AudioPlayer'
import { Link } from 'react-router-dom'



export default function SongPage(props) {

  if (props.location.state) {
    const { artworkUrl60,
      artworkUrl100,
      artistName,
      trackName,
      trackId,
      releaseDate,
      longDescription,
      collectionName,
      trackPrice,
      primaryGenreName,
      previewUrl } = props.location.state.song

    const favoritesTracks = []
    const [likeBtn, unlikeBtn] = useState('Like')
    const [numLikes, addLikes] = useState(0)
    const like = () => {
      if (numLikes === 0) {
        addLikes(numLikes + 1)
        unlikeBtn("Unlike")
        props.location.state.favorites.push({ artistName, trackName, artworkUrl60 })

      } else if (numLikes === 1) {
        addLikes(numLikes - 1)
        unlikeBtn("Like")
        props.location.state.favorites.pop({ artistName, trackName })

        // console.log(props.location.state.favorites)
      }
    }

    // console.log(artistName)
    // console.log(props.location.state.favorites)
    // console.log(props.location.state.favorites)

    return (
      <div className="player-favorites">
        <div className='player'>
          <img className="album-artwork" src={artworkUrl100} />
          <Player previewUrl={previewUrl} />
          
          <u><h5>{artistName}</h5></u>
          <h3>{trackName}</h3>
          <p>{primaryGenreName}</p>
          <p>{trackPrice}</p>
          <h4>{numLikes}</h4>
          <button onClick={like}>{likeBtn}</button>
          <button><Link to="/">Close</Link></button>
          <br />
        </div>

        <div className="favorites">
          {props.location.state.favorites ?
            props.location.state.favorites.map(item => {
              const { artistName, trackName, artworkUrl60 } = item
              return (
                <div className="favorites">
                <div>  <img src={artworkUrl60} alt={artworkUrl60} /></div>
                <div> <p>{artistName}</p></div>
                <div> <p>{trackName}</p></div>
                  <div>{longDescription}</div>
                </div>
              )
            }) : null}        
        </div>
      </div>
    )
  }
  else {
    return <div></div>
  }
}