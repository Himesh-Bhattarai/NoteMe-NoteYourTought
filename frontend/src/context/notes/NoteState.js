import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    // Initial state for notes
    const notesInitial = [

    ];

    const [notes, setNotes] = useState(notesInitial);

    // Function to add a note
    const addNote = (title, description) => {
        const newNote = {
            "user": "66d43795e5f260078d84dff7",
            "title": title,
            "description": description,
            "_id": Math.random().toString(36).substr(2, 9),
            "date": new Date().toISOString(),
            "__v": 0
        };
        setNotes(notes.concat(newNote));
    };

    // Function to edit a note 
    const editNote = (id) => {
      
    };

    // Function to delete a note 
    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(newNotes)

    };

    return (
        <NoteContext.Provider value={{ deleteNote, editNote, addNote, notes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
