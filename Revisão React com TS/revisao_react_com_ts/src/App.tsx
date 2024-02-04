import './App.css';

// Importando componenters
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';

import { createContext } from 'react';
import Context from './components/Context';

type textOrNull = string | null;

// context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}
export const AppContext = createContext<IAppContext | null>(null)

function App() {

  const name: string = "Alexandre";
  const age: number = 30;
  const isWorking: boolean = false;

  const userGreeting = (name: string): string => {
    return `Hello ${name}`;
  }

  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null;

  mySecondText = "Segundo texto";

  // context
  const contextValue: IAppContext = {
    language: "JS",
    framework: "Express",
    projects: 4,
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h3>{userGreeting(name)}</h3>
      <FirstComponent/>
      <SecondComponent name={"Segundo"}/>
      <Destructuring title={"Título"} content={"Conteúdo"} commentQty={10} tags={["Tag1", "Tag2"]} category={Category.TS}/>
      <State/>
      {myText && <p>Tem texto na variável</p>}
      <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
