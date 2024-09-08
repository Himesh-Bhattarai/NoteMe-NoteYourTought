import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';


export default function NoteItems(props) {
    const { note } = props;

    const context = useContext(NoteContext);
    const { deleteNote, editNote } = context;

    return (
        <>
            <div className="col md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title" >{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i class="fa-solid fa-pen-to-square mx-2" onClick={() => { editNote(note._id) }}></i>
                        <i class="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
                    </div>
                </div>
            </div>
        </>
    )
}
