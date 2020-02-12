import React, { useState, useEffect } from "react"


export const GameContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const GamesProvider = (props) => {
    const [games, setGames] = useState([])

    const getGames = () => {
        return fetch("http://localhost:8088/games")
            .then(res => res.json())
            .then(setGames)
    }

    const addGame = game => {
        return fetch("http://localhost:8088/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
        })
            .then(getGames)
    }


    const patchGame = game => {
      return fetch(`http://localhost:8088/games/${game.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(game)
      })
          .then(getGames)
    }

    const editGame = game => {
      return fetch(`http://localhost:8088/games/${game.id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(game)
      })
          .then(getGames)
  }

  const deleteGame = game => {
      return fetch(`http://localhost:8088/games/${game.id}`, {
          method: "DELETE"
      })
          .then(getGames)
  }

 
    useEffect(() => {
        getGames()
    }, [])

    useEffect(() => {
        console.log("****  game APPLICATION STATE CHANGED  ****")
        
    }, [games])

    return (
        <GameContext.Provider value={{
            games, addGame, editGame, deleteGame, patchGame
        }}>
            {props.children}
        </GameContext.Provider>
    )
}