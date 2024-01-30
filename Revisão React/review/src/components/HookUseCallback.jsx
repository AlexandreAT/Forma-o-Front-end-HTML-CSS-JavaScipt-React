import { useCallback, useState } from "react"

import { List } from "./List";

export const HookUseCallback = () => {
  
    const [counter, setCounter] = useState(0);

    const getItemsFromDatabase = useCallback(() => {
        return ["a", "b", "c"]
    }, [])

    return (
    <div>
        <List getItems={getItemsFromDatabase} />
        <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
        <p>{counter}</p>
        <hr />
    </div>
  )
}
