import React, { useContext } from "react"
import { GameContext } from "../GameProvider"
import Backlog from "./Backlog"
import "../Game.css"




export default (props) => {
  const { games } = useContext(GameContext)
  const  currentUserId  = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserGames = games.filter(game => game.userId === currentUserId)
  const backlog = currentUserGames.filter(game => game.isStarted === false && game.isCompleted === false)

  return (
      <>
      <aside className="gameContainer">

          <h1 className="page--title">Backlog</h1>

          <div className="activeGames">
              {
                  backlog.map(game => {
                    console.log("Displaying games")
                      return <Backlog {...props} key={game.id} game={game} />
                  })
              }
          </div>
      </aside>
      </>
  )
}