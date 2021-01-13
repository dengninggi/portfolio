import React, { useState, useEffect} from "react"
import { Link } from "react-router-dom"

function ToDoList() {
    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("Type here")
    const [error, setError] = useState(false)
    const [doneData, setDoneData] = useState([])
    const [allDone, setAllDone] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if (error) return;

        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
    }

    useEffect(() => {
        if (textInput.length <= 0) setError(true);
        else setError(false)
    }, [textInput])

    useEffect(() => {
        if (registryData.length == 0) setAllDone(true);
        else setAllDone(false);
    }, [registryData])

    const removeItem = (index, data, setData) => {
        let newData = [...data]
        newData.splice(index, 1)
        setData(newData)
    }

    const editItem = (index, data, setData) => {
        if (error) return;

        let newData = [...data]
        newData[index] = textInput;
        setData(newData)
        setTextInput("")
    }

    const moveData = (index, from, setFrom, to, setTo) => {
        const tempData = [...to]
        tempData.push(from[index])
        setTo(tempData)
        let newData = [...from]
        newData.splice(index, 1)
        setFrom(newData)
    }

    return (
        <main>
        <section>
            <h1>To Do List</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/registry">Registry</Link>
            </nav>
            <form onSubmit={addItem}>
                <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            {
                error ? <span class = "error"> No input found! </span> : 
                        <span class = "normal"> Click "Submit" to add/ Click "Update" to revise</span>
            }
        </section>
        <section>
            <h2> To Do ({registryData.length}) </h2>
            {allDone ? <span style={{background: "green"}}> Hooray! All jobs are done! </span> : <span> </span>}
            {
                registryData.map((item, index) => {
                    return (
                        <li key={index}>
                            <button onClick = 
                            {
                                () => moveData(index, registryData, setRegistryData, doneData, setDoneData)
                            }>&nbsp;&nbsp;Done&nbsp;&nbsp;</button>
                            &nbsp; {item} &nbsp;
                            <button onClick = {() => removeItem(index, registryData, setRegistryData)}>Remove</button>
                            <button onClick = {() => editItem(index, registryData, setRegistryData)}>Update</button>
                        </li>
                    )
                })
            }
        </section>
        <section>
            <h2> Done ({doneData.length})</h2>
            {
                doneData.map((item, index) => {
                    return (
                        <li key={index}>
                            <button onClick = {
                                () => moveData(index, doneData, setDoneData, registryData, setRegistryData)
                            }>Undone</button>
                            &nbsp; {item} &nbsp;
                            <button onClick = {() => removeItem(index, doneData, setDoneData)}>Remove</button>
                            <button onClick = {() => editItem(index, doneData, setDoneData)}>Update</button>
                        </li>
                    )
                })
            }
        </section>
        </main>
    );
}

export default ToDoList;