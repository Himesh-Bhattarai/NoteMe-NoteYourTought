import NoteContext from './NoteContext';

const NoteState = (props) => {

    const state = {
        "Name": "Himesh",
        "Age": "19"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.clildern}
        </NoteContext.Provider>
    )

};

export default NoteState;