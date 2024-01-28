// Componentes
import { Welcome } from './components/Welcome'
import { Questions } from './components/Questions'
import { QuizContext } from './context/quiz';
import { GameOver } from './components/GameOver';
import { PickCategory } from './components/PickCategory';

// react
import { useContext } from 'react'
import { useEffect } from 'react';

// Estilização
import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
      <div className='App'>
        <h1>Quiz de programação</h1>
        {quizState.gameStage === "Start" && <Welcome/>}
        {quizState.gameStage === "Category" && <PickCategory/>}
        {quizState.gameStage === "Playing" && <Questions/>}
        {quizState.gameStage === "End" && <GameOver/>}
      </div>
    </>
  )
}

export default App
