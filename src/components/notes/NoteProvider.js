import React, { useState, useEffect } from "react"


export const NoteContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])

    const getNotes = () => {
        return fetch("http://localhost:8088/notes")
            .then(res => res.json())
            .then(setNotes)
    }

    const addNote = note => {
        return fetch("http://localhost:8088/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
            .then(getNotes)
    }


    const patchNote = note => {
      return fetch(`http://localhost:8088/notes/${note.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(note)
      })
          .then(getNotes)
    }

    const editNote = note => {
      return fetch(`http://localhost:8088/notes/${note.id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(note)
      })
          .then(getNotes)
  }

  const deleteNote = note => {
      return fetch(`http://localhost:8088/notes/${note.id}`, {
          method: "DELETE"
      })
          .then(getNotes)
  }

 
    useEffect(() => {
        getNotes()
    }, [])

    useEffect(() => {
      
        
    }, [notes])

    return (
        <NoteContext.Provider value={{
            notes, addNote, editNote, deleteNote, patchNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}