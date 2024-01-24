import { useState } from "react"

export const ListRender = () => {

    const [list] = useState(["Ana", "Alexandre", "Paulo", "Guilherme"])

    const [users, setUsers] = useState([
        { id: 1, name: "Ana", age: 22},
        { id: 2, name: "Alexandre", age: 26},
        { id: 3, name: "Paulo", age: 23},
        { id: 4, name: "Guilherme", age: 22}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id));
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* Render de lista com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}
