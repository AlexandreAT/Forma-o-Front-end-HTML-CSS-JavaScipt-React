import React from 'react'

export const Conditional = () => {

    const x = 5;

    const name = "Alexandre";

  return (
    <div>
        <h4>Isso será exibido?</h4>
        {x > 2 && <p>Se X for true, sim!</p>}
        <h4>Renderização condicional com "else"</h4>
        {name === "João" ?(
            <div>
                <p>Olá joão!</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
    </div>
  )
}
