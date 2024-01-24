import React from 'react'

export const Events = () => {

    const handleClick = (e) => {
        console.log("Executou");
        console.log(e.target);
    }

    const rederSomething = (x) => {
        if(x){
            return <h4>Renderizando isso</h4>
        }else {
            return <h4>Renderizando outra coisa</h4>
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
