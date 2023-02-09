import { useState } from "react"
import TaskAdd from "./add"
import ListTasks from "./list"


export default function TaskApp(params) {

    const [tasks, setTasks] = useState([
        {
            text: 'Task 1', done: false
        }
    ])

    const handleTaskAdd = task => {
        setTasks([...tasks, {
            text: task, done: false
        }])
    }

    const handleTaskChange = task => {
        setTasks(
            tasks.map(t => {
                if (t.text === task.text) {
                    t.done = task.done
                }
                return t
            })
        )
    }

    const handleDelete = () => setTasks(tasks.filter(t => !t.done))

    return <>
        <article>
            <header><h3>Task App</h3></header>

            <TaskAdd onTaskAdd={handleTaskAdd} />
            <ListTasks tasks={tasks} onTaskChange={handleTaskChange} />


            <footer class="pull-right">
                <a role="button" href="#delete" onClick={handleDelete} className="primary">Delete completed</a>
            </footer>

        </article>
    </>

};
