import React, { useContext } from "react"
import { GameContext } from "../GameProvider"
import CompletedGames from "./CompletedGames"
import "../Game.css"




export default (props) => {
  const { games } = useContext(GameContext)
  const  currentUserId  = parseInt(localStorage.getItem("currentUserId"), 10)
  const currentUserGames = games.filter(game => game.userId === currentUserId)
  const completedGames = currentUserGames.filter(game => game.isStarted === true && game.isCompleted === true)

  return (
      <>
      <aside className="gameContainer">

          <h1 className="page--title">Completed Games</h1>

          <div className="activeGames">
              {
                  completedGames.map(game => {
                    console.log("Displaying games")
                      return <CompletedGames {...props} key={game.id} game={game} />
                  })
              }
          </div>
      </aside>
      </>
  )
}