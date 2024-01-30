import { useLayoutEffect, useEffect, useState } from "react"

export const HookUseLayoutEffect = () => {

    const [name, setName] = useState("Algum nome");

    useEffect(() => {
        console.log("2");
        setName("Mudou de novo!")
    }, [])

    useLayoutEffect(() => {
        console.log("1");
        setName("Outro nome")
    }, [])

    console.log(name);

  return (
    <div>
        <p>Nome: {name}</p>
        <hr />
    </div>
  )
}
