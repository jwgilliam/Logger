import React from "react"
import { Route } from "react-router-dom"
import { GamesProvider } from "./games/GameProvider"
import GameList from "./games/GameList"
import GameForm from "./games/GameForm"
import BacklogList from "./games/backlog/BacklogList"
import CompletedGamesList from "./games/completedgames/CompletedGamesList"


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

  <Route exact path="/Backlog" render ={
                            props => <BacklogList { ...props} />
                        } />
  <Route exact path="/Completed Games" render ={
                props => <CompletedGamesList {...props} />
  }/>
  </GamesProvider>
  </>
  )
}