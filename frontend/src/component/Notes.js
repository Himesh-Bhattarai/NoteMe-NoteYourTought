import React, { useContext } from 'react'
import NoteItems from './NoteItems'
import NoteContext from '../context/notes/NoteContext'

export default function Notes() {
  const context = useContext(NoteContext);
  const {notes, addNote}=context;
  return (
   <>
   <div className="container row my-3">
    <NoteItems />
    {notes.map((note)=>{
      return <NoteItems key={Node._id} note={note}/>
    })}
   </div>
   </>
  )
}
