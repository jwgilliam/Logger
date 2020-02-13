import React from "react"
import { Route } from "react-router-dom"
import { GamesProvider } from "./games/GameProvider"
import GameList from "./games/GameList"
import GameForm from "./games/GameForm"
import BacklogList from "./games/backlog/BacklogList"
import CompletedGamesList from "./games/completedgames/CompletedGamesList"
import ReviewForm from "./games/completedgames/ReviewForm"
import { NoteProvider } from "./notes/NoteProvider"
import NoteForm from "./notes/NoteForm"


export default (props) => {
  return (
  <>
  <NoteProvider>
  <Route path="/games/notes/:gameId" render={
                      props => <NoteForm {...props} />
                    } />
    



  <GamesProvider>
  <Route exact path="/Active Games" render ={
    props => <GameList { ...props} />
  } />
                  <Route path="/games/create" render={
                    props => <GameForm {...props} />
                  } />
                  <Route path="/games/edit/:gameId(\d+)" render={
                    props => <GameForm {...props} />
                  } />
                    <Route path="/games/review/:gameId" render={
                      props => <ReviewForm {...props} />
                    } />
                    <Route exact path="/games/review/edit/:gameId" render={
                      props => <ReviewForm {...props} />
                    } />
                   
                    

  <Route exact path="/" render ={
    props => <BacklogList { ...props} />
  } />
  <Route exact path="/Completed Games" render ={
    props => <CompletedGamesList {...props} />
  }/>
  </GamesProvider>
  </NoteProvider>
  </>
  )
}