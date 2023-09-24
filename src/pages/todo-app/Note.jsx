import React from 'react'

const Note = ({list}) => {
  return (
    <div className='tiei'>
      <div className='test' key={list.id}>
         <div>
            <div><p>{list.id}</p></div>
            <div><p>{list.title}</p></div>
            <div><p>{list.body}</p></div>
         </div>
      </div>
    </div>
  )
}

export default Note