import React, {useContext} from 'react';
import NoteContext from '../context/notes/NoteContext';


export default function NoteItems(props) {

     const context = useContext(NoteContext);
     const {deleteNote} = context;
     const props = note;

    return (
        <>
            <div className="col md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <i class="fa-solid fa-pen-to-square mx-2" onClick={editButtonhit}></i>
                        <i class="fa-solid fa-trash mx-2" onClick= {()=>{deleteNote(note._id)}}></i>
                    </div>
                </div>
            </div>
        </>
    )
}
