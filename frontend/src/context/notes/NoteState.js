import NoteContext from './NoteContext';

const NoteState = (props) => {

    const state = {
        "Name": "Himesh",
        "Age": "19"
    }


    //Add note
const addNote =()=>{
    
}
    //Editnote


    //Deletenotes


    return (
        <NoteContext.Provider value={state}>
            {props.clildern}
        </NoteContext.Provider>
    )

};

export default NoteState;