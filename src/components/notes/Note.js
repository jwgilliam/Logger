import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"

export default ({ note, props, history }) => {
  const { deleteNote } = useContext(NoteContext)




return (
  
  <section className="note__card">

      
      <div className="note">{note.text}</div>
      

    


        <button className="deleteNoteButton" onClick={()=>{
          
          deleteNote(note).then(()=> props.history.push("/Active Games"))
        }
      }>Delete</button>

  </section>
)

  }