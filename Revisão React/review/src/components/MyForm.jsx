import "./MyForm.css";

import { useState } from "react";

export const MyForm = ({userName, userEmail}) => {

    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role);

        setName("");
        setEmail("");
        setBio("");
        setRole("");
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
            <label>
                <span>Bio: </span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio || ""}></textarea>
            </label>
            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
