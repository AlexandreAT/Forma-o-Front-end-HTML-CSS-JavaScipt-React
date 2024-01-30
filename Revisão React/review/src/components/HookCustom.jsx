import { useState } from "react"
import { usePrevious } from "../hooks/usePrevious"

export const HookCustom = () => {
  
    const [number, setNumber] = useState(0);
    const previousValue = usePrevious(number);
  
    return (
    <div>
        <p>Valor atual: {number}</p>
        <p>Valor anterior: {previousValue}</p>
        <button onClick={() => setNumber(Math.random())}>Alterar!</button>
    </div>
  )
}
