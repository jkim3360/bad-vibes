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
      longDescription,
      trackPrice,
      previewUrl } = props.location.state.song

    const [likeBtn, unlikeBtn] = useState('Info')
    const [numLikes, addLikes] = useState(0)
    const like = () => {
      if (numLikes === 0) {
        addLikes(numLikes + 1)
        unlikeBtn("Hide")
        props.location.state.favorites.push({ artistName, trackName, artworkUrl60 })

      } else if (numLikes === 1) {
        addLikes(numLikes - 1)
        unlikeBtn("Like")
        props.location.state.favorites.pop({ artistName, trackName })
      }
    }

    return (
      <div className="player-favorites">
        <div className='player'>
          <div className="album-artwork"><img src={artworkUrl100} /></div>
          <Player previewUrl={previewUrl} />
          <u><h4>{artistName}</h4></u>
          <h2>{trackName}</h2>
          <h4>{`$${trackPrice}`}</h4>
          <button className="like-button" onClick={like}>{likeBtn}</button>
          <button className="close-button"><Link to="/">Close</Link></button>
          <br />
        </div>

        <div className="favorites">
          {props.location.state.favorites ?
            props.location.state.favorites.map(item => {
              return (
                <div className="favorites" style={{ 'lineHeight': `2` }}><div style={{ 'fontSize': `${24}px`, 'color': 'grey' }}>Artist/Track Info</div>
                  {longDescription ? longDescription : 'Sorry, the API does not provide info for this track. Not my fault.'}
                </div>
              )
            }) : null}
        </div>
      </div>
    )
  }
  else {
    return <h1>Loading...</h1>
  }
}