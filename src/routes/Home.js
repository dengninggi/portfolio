import React from "react"
import { Link } from "react-router-dom"

function Home() {
    return (
        <header>
            <h1>Home</h1>
            <nav>
                <Link to="/Registry">Registry</Link>
                <Link to="/ToDoList">To Do List</Link>
            </nav>
        </header>
    )
}

export default Home;