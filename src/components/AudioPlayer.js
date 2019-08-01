/*eslint-disable*/
import React from 'react'
import PlayAudio from 'react-simple-audio-player'
// import { tsPropertySignature } from '@babel/types';

export default function Player(props) {

  return (
    <div>
      <PlayAudio className='audio-player' simpleMode={false}
        url={props.previewUrl}
      /></div>
  );
}