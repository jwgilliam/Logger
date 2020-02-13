import React, { useContext } from "react"
import "../Game.css"
import { GameContext } from "../GameProvider"
import { NoteContext } from "../../notes/NoteProvider"
import Note from "../../notes/Note"


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
      <button onClick={() => {
        history.push(`/games/edit/${game.id}`)

      }}>Edit</button>
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
  
  <section className="game__card">

      
      <div className="game__name">{game.title}</div>
      <div className="game__description">{game.description}</div>
      <div className="game__notes">
      {
                  gameNotes.map(note => {
                  
                      return <Note {...props} key={note.id} note={note} />
                  })
                }

      </div>
      
      <div className="game__review">{game.review}</div>


    <div className="game__btns">
    <div className="game__content">

      <label>Completed?</label>
      {completedCheckbox()}
      <label>Start Game</label>
      {startedCheckbox()}
    </div>
      
      <button className="reviewButton" onClick={() => {
      
        history.push (`/games/review/${game.id}`)
      }}>Rate and Review</button>

        <button className="deleteGameButton" onClick={()=>{
          
          deleteGame(game).then(()=> history.push("/"))
        }
      }>Delete</button>
    </div>
  </section>
)

  }