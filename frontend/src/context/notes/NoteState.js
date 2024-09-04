import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    // Initial state for notes
    const notesInitial = [
        {
            "user": "66d43795e5f260078d84dff7",
            "title": "Example Title",
            "description": "Example Description",
            "_id": "66d71b2d05ef899ef0f6216e",
            "date": "2024-09-03T14:20:29.991Z",
            "__v": 0
        }
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
    const editNote = () => {
        console.log("Edit Note");
    };

    // Function to delete a note 
    const deleteNote = () => {
        console.log("Delete Note");
    };

    return (
        <NoteContext.Provider value={{ deleteNote, editNote, addNote, notes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
