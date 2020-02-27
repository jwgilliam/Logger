import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider"



export default props => {
    const { addGame, games, editGame } = useContext(GameContext)
    const [game, setGames] = useState({})

    const editMode = props.match.params.hasOwnProperty("gameId")
    

    const handleControlledInputChange = (event) => {
     
        const newGame = Object.assign({}, game)
        newGame[event.target.name] = event.target.value
        setGames(newGame)
    }

    const setDefaults = () => {
        if (editMode) {
            const gameId = parseInt(props.match.params.gameId)
            const selectedGame = games.find(g => g.id === gameId) || {}
            setGames(selectedGame)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [games])

    const constructNewGame = () => {
        

        
            if (editMode) {
                editGame({
                    id: game.id,
                    title: game.title,
                    description: game.description,
                    userId: parseInt(localStorage.getItem("currentUserId")),
                    isStarted: game.isStarted,
                    isCompleted: game.isCompleted,
                    review: game.review,
                    date: Date.now()
                  
                 
                })
                    .then(() => props.history.push("/"))
            } else {
                addGame({
                    id: game.id,
                    title: game.title,
                    description: game.description,
                    userId: parseInt(localStorage.getItem("currentUserId")),
                    isStarted: false,
                    isCompleted: false,
                    review: "",
                    date: Date.now() 
                    
                  
                   
                })
                    .then(() => props.history.push("/"))
            
        }
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">{editMode ? "Edit Game" : "Add Game"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Title"
                        value={game.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="Description">Description:</label>
                <input type="text" name="description" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Description"
                        value={game.description}
                        onChange={handleControlledInputChange}
                    />
              </div>
            </fieldset>
            <button className="btn" type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewGame()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Save Game"}
            </button>
        </form>
    )
}