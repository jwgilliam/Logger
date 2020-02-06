import React, { useContext } from "react"
import "./Game.css"
import { GameContext } from "./GameProvider"


export default ({ game, history }) => {
  const { deleteGame, patchGame } = useContext(GameContext)


const checkbox = ()=>{
  let checkboxValue = true
  if(game.isCompleted === true){
      return <>
      <input type="checkbox" name="checkbox" onChange={()=>{
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
      <input type="checkbox" name="checkbox" onChange={()=>{
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

return (
  
  <section className="game--card">

      
      <div className="game--name">{game.title}</div>
      <div className="game--description">{game.description}</div>
    <div className="game--btns">
    <div className="game--content">

      <label>Completed?</label>
      {checkbox()}
    </div>
      





        <button className="deleteGameButton" onClick={()=>{
          
          deleteGame(game).then(()=> history.push("/"))
        }
      }>Delete</button>
    </div>
  </section>
)

  }