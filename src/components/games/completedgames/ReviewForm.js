import React, { useContext, useState, useEffect, useRef } from "react"
import { GameContext } from "../GameProvider"



export default props => {
  const { deleteGame, games, patchGame } = useContext(GameContext)

  const gameId = props.match.params.gameId
  const game = games.find(g => g.id === gameId)
  console.log(gameId)
  
  const review = useRef()

    const constructNewReview = () => {
        const patchedGame = {
          review: review.current.value,
          id: gameId
        }
        patchGame(patchedGame).then(() => props.history.push("/Completed Games"))
    }

    return (
        <form className="reviewForm">
            <h2 className="reviewForm__title">{"Add Review"}</h2>
            
            <fieldset>
              <div className="form-group">
                <label htmlFor="Description">Review:</label>
                <input type="text" name="review" required autoFocus className="form-control"
                        proptype="varchar"
                        ref={review}
                        placeholder="Review"
                        defaultValue=""
                        
                    />
              </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {

                  
                    evt.preventDefault()
                    constructNewReview()
                
                }}
                className="btn btn-primary">
                { "Save Review"}
            </button>
        </form>
    )
}