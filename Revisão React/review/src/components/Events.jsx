import React from 'react'

export const Events = () => {

    const handleClick = (e) => {
        console.log("Executou");
        console.log(e.target);
    }

    const rederSomething = (x) => {
        if(x){
            return <h1>Renderizando isso</h1>
        }else {
            return <h1>Renderizando outra coisa</h1>
        }
    }

    // return 10 > 2 && <p>Carregando...</p>;

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
        </div>
        <div>
            <button onClick={handleClick}>Clique aqui com função</button>
        </div>
        {rederSomething(true)}
        {rederSomething(false)}
    </div>
  )
}
