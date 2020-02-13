import React, { useContext, useState, useEffect } from "react"
import { NoteContext } from "./NoteProvider"



export default props => {
    const { notes, editNote, addNote } = useContext(NoteContext)
    const [note, setNotes] = useState({})
    
    const gameId = parseInt(props.match.params.gameId)
    const editMode = props.match.params.hasOwnProperty("noteId")

    const handleControlledInputChange = (event) => {
     
        const newNote = Object.assign({}, note)
        newNote[event.target.name] = event.target.value
        setNotes(newNote)
    }

    const setDefaults = () => {
        if (editMode) {
            const noteId = parseInt(props.match.params.gameId)
            const selectedNote = notes.find(n => n.id === noteId) || {}
            setNotes(selectedNote)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [notes])

    const constructNewNote = () => {
        

        
            if (editMode) {
                editNote({
                    id: note.id,
                    text: note.text,
                    gameId: gameId
                 
                })
                    .then(() => props.history.push("/"))
            } else {
                addNote({
                    id: note.id,
                    text: note.current.value,
                    gameId: gameId
                    
                  
                   
                })
                    .then(() => props.history.push("/"))
            
        }
    }

    return (
        <form className="noteForm">
            <h2 className="noteForm__title">{editMode ? "Edit Note" : "Add Note"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Note">Note: </label>
                    <input type="text" name="note" required autoFocus className="form-control"
                        proptype="varchar"
                        ref={note}
                        placeholder="Note"
                        defaultValue=""
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
           
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewNote()
                    
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Save Note"}
            </button>
        </form>
    )
}