import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../UI/Button'
import '../../styles/NoteForm.css'

const NoteForm = ({create}) => {
   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')
   const [list, setList] = useState('')
   
   const createNote = (e)=>{
      e.preventDefault()
      const newNote = {
         ...list,
         id:Date.now(),
         body,
         title
      }
      create(newNote)
      setTitle('')
      setBody('')
   }
  return (
    <div>
      <Input
         value={title}
         onChange={e=> setTitle(e.target.value)}
         type="text"
         placeholder='Title'
      />
      <Input
         value={body}
         onChange={e=> setBody(e.target.value)}
         type="text"
         placeholder='Title'
      />
      <Button className='create__note' onClick={createNote}/>
    </div>
  )
}

export default NoteForm