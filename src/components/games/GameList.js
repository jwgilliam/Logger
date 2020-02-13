import React, { useContext } from "react"
import { GameContext } from "./GameProvider"
import Game from "./Game"
import "./Game.css"
import { NoteContext} from "../notes/NoteProvider"
import Note from "../notes/Note"




export default (props) => {
  const { games } = useContext(GameContext)
  const  currentUserId  = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserGames = games.filter(game => game.userId === currentUserId)
  const activeGames = currentUserGames.filter(game => game.isStarted === true && game.isCompleted === false)
  

  return (
      <>
      <aside className="gameContainer">

          <h1 className="page--title">Active Games</h1>

         
          <div className="activeGames">
              {
                  activeGames.map(game => {
                  
                      return <Game {...props} key={game.id} game={game} />
                  })
              }
          </div>
      </aside>
      </>
  )
}