import { useState } from "react"

export default function TaskAdd({onTaskAdd}) {

    const [task, setTask] = useState('')

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onTaskAdd(task)
        setTask('')
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input type="text" 
                id="task" 
                name="task" 
                placeholder="Task" 
                value={task}
                onChange={handleChange}
                required></input>
            <button type="submit">Add</button>
        </form>
    </>
};
