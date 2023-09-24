import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NoteMap from './NoteMap'
import Input from '../../components/Input'
import NoteForm from './NoteForm'

const Todo = () => {
   const [list, setList] = useState([])
   const [newList, setNewList] = useState(['op'])

   async function fetchPosts(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10')
    setList(response.data)
  }
  useEffect(()=>{
    fetchPosts()
  }, [])

   localStorage.setItem('noteList',JSON.stringify(list))
   const localNoteList = JSON.parse(localStorage.getItem('noteList'))

  const createNewNote = (newNote) => {
   localStorage.setItem('test',JSON.stringify(newList))
   const test = JSON.parse(localStorage.getItem('test'))
   console.log(test)
   setList([...localNoteList, newNote])
   setNewList([...list])
  }
  return (
    <div>
      <NoteForm create={createNewNote}/>
      <NoteMap list={localNoteList}/>
    </div>
  )
}

export default Todo