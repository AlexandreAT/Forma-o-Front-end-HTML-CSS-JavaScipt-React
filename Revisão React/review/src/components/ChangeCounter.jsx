// Context - Aleterando o valor
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

// Context - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

export const ChangeCounter = () => {
    const {counter, setCounter} = useCounterContext();

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  )
}
