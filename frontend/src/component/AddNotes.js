import React, { useContext, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';

const AddNotes = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "" });

    const handleClick = (e) => {
        e.preventDefault(); 

        // Basic validation to check if title or description is empty
        if (note.title.trim() === "" || note.description.trim() === "") {
            alert("Please fill out both the title and description fields.");
            return;
        }

        addNote(note.title, note.description); 
        setNote({ title: "", description: "" });
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        className="form-control" 
                        name="title" 
                        value={note.title} 
                        onChange={onChange} 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control" 
                        id="description" 
                        name="description" 
                        rows="3"
                        value={note.description} 
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Notes</button>
            </form>
        </>
    );
};

export default AddNotes;
