import { useEffect } from "react"
import { useState } from "react"

export const HookUseEffect = () => {

    // useEffect sem dependências
    useEffect(() => {
        console.log("Estou sendo executado");
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1);
    };

    // Array de dependências vazio
    useEffect(() => {
        console.log("Serei executado apenas uma vez");
    }, [])

    // useEffect com dependências
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if(anotherNumber > 0){
            console.log("Sou executado apenas quando muda o anotherNumber");
        }
    }, [anotherNumber]);

    // cleanup do useEffect
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log("Hello World");
    //         setAnotherNumber(anotherNumber + 1);
    //     }, 2000)
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [anotherNumber])

  return (
    <div>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <h4>useEffect com dependências</h4>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Muda o another</button>
        <p></p>
    </div>
  )
}
