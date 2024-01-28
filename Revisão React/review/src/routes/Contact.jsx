// Context - Aleterando o valor
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

// Context - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

// Contexto mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

export const Contact = () => {
  // Context
  const {counter} = useCounterContext();

  // Contexto mais complexo
  const {color} = useTitleColorContext();
  
  return (
    <div>
        <h1>Pagina de contato.</h1>
        <p>Valor do counter: {counter}</p>
        <h3>Context</h3>
        <p style={{color: color}}>Texto com cor</p>
    </div>
  )
}
