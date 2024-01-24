import "./MyForm.css";

import { useState } from "react";

export const MyForm = ({userName, userEmail}) => {

    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);

    const handleName = (e) => {
        setName(e.target.value);
    }

    console.log(name, email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}
                //Controlled input
                value={name || ""}
                />
            </div>
            <label>
                <span>E-mail: </span><input type="text" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
