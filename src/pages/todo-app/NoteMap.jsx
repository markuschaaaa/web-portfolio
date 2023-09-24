import React from 'react'
import Note from './Note'

const NoteMap = ({list}) => {
   // console.log(list)
  return (
    <div className='tiei'>
      {
         list.map(e=>{
            return <div key={e.id}><Note list={e}/></div>
         })
      }
    </div>
  )
}

export default NoteMap