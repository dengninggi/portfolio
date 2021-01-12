import React, { useState, useEffect} from "react"
import { Link } from "react-router-dom"

function ToDoList() {
    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
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
        if (textInput.length > 10) setError(true);
        else setError(false)
    }, [textInput])

    useEffect(() => {
        if (registryData.length == 0 && doneData.length > 0) setAllDone(true);
        else setAllDone(false);
    }, [registryData])

    // console.log(registryData)

    const removeItem = (index) => {
        let newData = [...registryData]
        newData.splice(index, 1)
        setRegistryData(newData)
    }

    const editItem = (index) => {
        if (error) return;

        let newData = [...registryData]
        newData[index] = textInput;

        setRegistryData(newData)
    }

    const moveToDone = (index) => {
        const tempData = [...doneData]
        tempData.push(registryData[index])
        setDoneData(tempData)
        let newData = [...registryData]
        newData.splice(index, 1)
        setRegistryData(newData)
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
                <label>Type to add/update: &nbsp;</label>
                <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            {error ? <span style={{color: "red"}}> Error occurred.</span> : <span> </span>}
            </section>
            <section>
            <h2> To Do ({registryData.length}) </h2>
            {allDone ? <span style={{background: "green"}}> Hooray! All jobs are done! </span> : <span> </span>}
            {
                registryData.map((item, index) => {
                    return (
                        <li key={index}>
                            <button onClick = {() => moveToDone(index)}>&nbsp;&nbsp;Done&nbsp;&nbsp;</button>
                            &nbsp; {item} &nbsp;
                            <button onClick = {() => removeItem(index)}>Remove</button>
                            <button onClick = {() => editItem(index)}>Update</button>
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
                            <button>Undone</button>
                            &nbsp; {item} &nbsp;
                        </li>
                    )
                })
            }
        </section>
        </main>
    );
}

export default ToDoList;