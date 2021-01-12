import React from "react"
import { Link } from "react-router-dom"

function Home() {
    return (
        <header>
            <h1>Home</h1>
            <nav>
                <Link to="/registry">Registry</Link>
                <Link to="/todolist">To Do List</Link>
            </nav>
        </header>
    )
}

export default Home;