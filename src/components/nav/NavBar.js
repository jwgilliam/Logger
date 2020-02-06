import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <div className="icon--logo">
          
             

            </div>
            <li className="navbar__item active">
               
                <Link className="navbar__link" to="/Home">Home</Link>
            </li>
            <li className="navbar__item">
              
                <Link className="navbar__link" to="/Backlog">Backlog</Link>
            </li>
            <li className="navbar__item">       

                
                <Link className="navbar__link" to="/Completed Games">
                    Completed Games
                    </Link>
            </li>
            
            {
                localStorage.getItem("currentUserId")
                    ? <li className="navbar__item">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("currentUserId")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""
// what is this      ⬆
            }
        </ul>
    )
}