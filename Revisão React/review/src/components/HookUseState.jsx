import { useState } from "react"

export const HookUseState = () => {

    let userName = "Paulo";
    const [name, setName] = useState("Alexandre");
  
    const changeNames = () => {
        userName = "Guilherme";

        setName("Alexandre Arribamar");
    }

    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    }

    return (
    <div>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        <h4>useState com input</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
        <p>Você tem {age} anos.</p>
        <hr />
    </div>
  )
}
