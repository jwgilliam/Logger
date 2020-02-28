import React, { useContext } from "react"
import "./Game.css"
import { GameContext } from "./GameProvider"
import { NoteContext } from "../notes/NoteProvider"
import Note from "../notes/Note"


export default ({ game, history, props }) => {
  const { deleteGame, patchGame } = useContext(GameContext)
  const { notes } = useContext(NoteContext)
  const gameNotes = notes.filter(note => note.gameId === game.id)


const completedCheckbox = ()=>{
  let checkboxValue = true
  if(game.isCompleted === true){
      return <>
      <input type="checkbox" name="completedCheckbox" onChange={()=>{
          checkboxValue = false
          const patchedGame= {
              isCompleted:checkboxValue,
              id: game.id
          }
          patchGame(patchedGame).then(()=> history.push("/"))
      }} checked></input>
      
      </>
  }else{
      checkboxValue = true
      
      return <>
      <input type="checkbox" name="completedCheckbox" onChange={()=>{
          const patchedGame= {
              isCompleted:checkboxValue,
              id: game.id
          }
          patchGame(patchedGame).then(()=> history.push("/"))
      }}></input>
     
      </>
  }

}

const startedCheckbox = ()=>{
  let checkboxValue = true
  if(game.isStarted === true){
      return <>
      <input type="checkbox" name="startedCheckbox" onChange={()=>{
          checkboxValue = false
          const patchedGame= {
              isStarted:checkboxValue,
              id: game.id
          }
          patchGame(patchedGame).then(()=> history.push("/"))
      }} checked></input>
      
      </>
  }else{
      checkboxValue = true
      
      return <>
      <input type="checkbox" name="startedCheckbox" onChange={()=>{
          const patchedGame= {
              isStarted:checkboxValue,
              id: game.id
          }
          patchGame(patchedGame).then(()=> history.push("/"))
      }}></input>
      </>
  }
}

return (
  
  <section className="game--card">

      
      <h2 className="game--name">{game.title}</h2>
      <div className="game--description">{game.description}</div>
      <div className="game__notes">
      {
                  gameNotes.map(note => {
                  
                      return <Note {...props} key={note.id} note={note} history={props.history} />
                  })
                }
      </div>
    <div className="game--btns">
      

    <button className="btn" onClick={() => {
        history.push(`/games/edit/${game.id}`)

      }}>Edit</button>


        <button className="btn" onClick={()=>{
          
          deleteGame(game).then(()=> history.push("/"))
        }
      }>Delete</button>
                <button className="btn" onClick={()=>{
                  history.push(`/games/notes/${game.id}`)
                }}>Add Note</button>
    </div>
    <div className="game--content">

    

      <label>Game Started</label>
      {startedCheckbox()}
      <label>Completed?</label>
      {completedCheckbox()}
    </div>
  </section>
)

  }