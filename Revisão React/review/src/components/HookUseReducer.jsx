import { useState } from "react";
import { useReducer } from "react"

export const HookUseReducer = () => {
  
    const[number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    })

    const initialTask = [
        {id:  1, text: "Fazer alguma coisa"},
        {id:  2, text: "Fazer alguma coisa"},
    ];

    const taskReducer = (state, action) => {
        switch(action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setTaskText("");
                return[...state, newTask];

            case "DELETE":
                return state.filter((task) => task.id !== action.id);

            default:
                return state;
        }
    }

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({type: "ADD"});
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id})
    }

    return (
    <div>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Altera o número</button>
        <h4>Tarefas</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
            <input type="submit" value="Enviar" />
        </form>
        <ul>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            ))}
        </ul>

        <hr />
    </div>
  )
}
