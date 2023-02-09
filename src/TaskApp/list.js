export default function ListTasks({ tasks, onTaskChange }) {

    return <aside>
        <nav>
            <ul>
                {tasks.map((task, index) => (<li key={index}>
                    <input type="checkbox" onChange={e => onTaskChange(
                        { ...task, done: e.target.checked }
                    )} checked={task.done}></input>
                    {task.done ? 'true' : 'false'} {task.text}
                    <br />
                </li>)
                )}
            </ul>
        </nav>
    </aside>

};
