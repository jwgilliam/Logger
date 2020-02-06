import React from "react"
import { Route } from "react-router-dom"
import { GamesProvider } from "./games/GameProvider"
import GameList from "./games/GameList"
import GameForm from "./games/GameForm"


export default (props) => {
  return (
  <>
  <GamesProvider>
  <Route exact path="/" render ={
                            props => <GameList { ...props} />
                        } />
                  <Route path="/games/create" render={
                                  props => <GameForm {...props} />
                              } />
                  <Route path="/games/edit/:gameId(\d+)" render={
                        props => <GameForm {...props} />
                    } />
  </GamesProvider>
  </>
  )
}