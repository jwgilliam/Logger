import React, { useRef } from "react"
import { Link } from "react-router-dom";
import "./Login.css"

// import react useref
// import link
// check if user exists
// render the form to allow user login
// link the user to register page if not logged in

const Login = props => {
    const email = useRef()
    const password = useRef()
    const customerName = useRef()
    const address = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return user[0]
                }
                return false
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.password === password.current.value) {
                    localStorage.setItem("currentUserId", exists.id)
                    props.history.push("/")
                } else if (exists && exists.password !== password.current.value) {
                    window.alert("Password does not match")
                } else if (!exists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            name: customerName.current.value,
                            address: address.current.value
                        })
                    })
                        .then(_ => _.json())
                        .then(response => {
                            localStorage.setItem("currentUserId", response.id)
                            props.history.push("/")
                        })
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="login--header">FLAMINGO</h1>
                 
                    <h2>please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> email </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="email"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> password </label>
                        <input ref={password} type="password"
                            id="password"
                            className="form-control"
                            placeholder="password"
                            required />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                    </button>
                    </fieldset>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
                </form>
            </section>
        </main>
    )
}
export default Login
