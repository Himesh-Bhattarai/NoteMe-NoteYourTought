import React, { useContext } from 'react';
import NoteItems from './NoteItems';
import NoteContext from '../context/notes/NoteContext';

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes } = context; // Destructure only what is necessary

  return (
    <>
      <div className="container row my-3">
        {/* Remove the initial NoteItems component without props */}
        {notes.map((note) => {
          return <NoteItems key={note._id} note={note} />;
        })}
      </div>
    </>
  );
}


