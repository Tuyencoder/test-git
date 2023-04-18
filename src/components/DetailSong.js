import React, { useContext } from 'react'
import Songs from '../Songs'
export default function DetailSong() {
  const {song} =  useContext(Songs)
  
  return (
    <div className='col-span-1 text-start text-slate-400 p-3'>
        <h2 className='font-bold text-[#38BDF8]'>Now Playing</h2>
        <h1 className='text-xl text-[#8A6F55]'>{song.name}</h1>
        <div className='w-[240px] m-auto mt-10'>
            <img src={song.links.images[0].url} alt='alan-woker' />
        </div>
        <div className='flex justify-evenly items-center mt-10'>  
        <img  className=' w-[70px] rounded-full' src={song.links.images[1].url} alt={song.author} />
        <span className='text-white'>{song.author}</span>
        </div>
    </div>
  )
}
