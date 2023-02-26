import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Songs from '../Songs'

export default function Playing() {
  const {song,hanleSetSong} = useContext(Songs)
  const handleClickNext = () =>{
    hanleSetSong(song.id + 1)
  }
  const handleClickPrev = () =>{
    hanleSetSong(song.id - 1)
  }
  return (
    <AudioPlayer className='playing-music' 
    src={song.url} 
    showSkipControls={true} 
    showJumpControls={false} 
    onClickNext = {handleClickNext}
    onClickPrevious  = {handleClickPrev}
    />
  )
}
