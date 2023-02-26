import React, { useContext,  useState ,useEffect} from 'react'
import Songs from '../Songs'
export default function List() {
  const {Datasongs,hanleSetSong,song} = useContext(Songs)
  
  const [idsong,setIdsong] = useState([])
  const handlePlaysong =(idsong) =>{
    setIdsong(idsong)
    hanleSetSong(idsong)
  }
  useEffect(() => {
    setIdsong(song.id)
  }, [song])
  
  return (
    <div className='col-span-2 overflow-y-scroll ' >
      <table className='table-auto w-full '>
        <thead className='text-white p-2 sticky top-0 bg-[#334155]'>
          <tr>
            <th className='text-end'>#</th>
            <th className='text-center'>Tittle</th>
            <th>Author</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody >
          {
            Datasongs.map((song, index) => {
              
              return (
                <tr key={index} className={`text-[#767D87] bg-slate-800 text-xl  hover:bg-[#475569] hover:cursor-pointer ${idsong === song.id  && 'text-teal-400  bg-[#475569]'   } `}
                onClick={()=>handlePlaysong(song.id)}
                >
                  <td className='text-end'>{song.id}</td>
                  <td className='text-center'>{song.name}</td>
                  <td>{song.author}</td>
                  <td><a href={song.url}><i className='fa fa-download'></i></a></td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}
