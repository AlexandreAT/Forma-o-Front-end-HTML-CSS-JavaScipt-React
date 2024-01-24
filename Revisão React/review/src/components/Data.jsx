import { useState } from "react";

export const Data = () => {

    let numberData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
        <p>Valor: {numberData}</p>
        <button onClick={() => (numberData = 15)}>Mudar variável sem atualizar o componente</button>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar o state atualizando o componente</button>
    </div>
  )
}
