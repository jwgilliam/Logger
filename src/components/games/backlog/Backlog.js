import React, { useContext } from "react"
import "../Game.css"
import { GameContext } from "../GameProvider"


export default ({ game, history }) => {
  const { deleteGame, patchGame } = useContext(GameContext)


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
      <button onClick={() => {
        history.push(`/games/edit/${game.id}`)

      }}>Edit</button>
      </>
  }
}

return (
  
  <section className="game--card">

      
      <div className="game--name">{game.title}</div>
      <div className="game--description">{game.description}</div>
    <div className="game--btns">
    <div className="game--content">

      <label>Start Game</label>
      {startedCheckbox()}
    </div>
      





        <button className="deleteGameButton" onClick={()=>{
          
          deleteGame(game).then(()=> history.push("/"))
        }
      }>Delete</button>
    </div>
  </section>
)

  }