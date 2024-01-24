import './App.css'
import FirstComponent from './components/FirstComponent'
import { MyComponent } from './components/MyComponent'
import { Events } from './components/Events'

// Imagens
import night from "./assets/night.jpg";

// hooks - useState
import { Data } from './components/Data'

// arrays - map
import { ListRender } from './components/ListRender';

// Render condicionadl
import { Conditional } from './components/Conditional';

// Props
import { ShowUserName } from './components/ShowUserName';

// Desestruturando props
import { CarDetails } from './components/CarDetails';

// Renderização de listas com componentes
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarela", km: 0},
  {id: 2, brand: "Volkswagen", color: "Azul", km: 10000},
  {id: 3, brand: "Mercedes", color: "Verde", km: 7000}
]

// Fragments
import { Fragment } from './components/fragment';

// Children
import { Container } from './components/Container';

// Função em prop
import { ExecuteFunction } from './components/ExecuteFunction';

// state lift
import { useState } from 'react';
import { Message } from './components/Message';
import { ChangeMessage } from './components/ChangeMessage';

// CSS modules
import { Title } from './components/Title';

// Formulários
import { MyForm } from './components/MyForm';

function App() {

  // Função da propriedade
  function showMessage(){
    console.log("Evento do componente pai");
  }

  // state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  // CSS
  const n = 15;

  // Classes dinamicas
  const redTitle = true;

  return (
    <>
      <div className="App" style={{paddingBottom: "500px"}}>
        <h1>React na prática</h1>
        <h2>Fundamentos do react</h2>
        <div className='div-content'>
          <FirstComponent/>
          <MyComponent/>
          <Events/>
        </div>
        <h2>Conceitos avançados</h2>
        <div className="div-content">
          <h3>Imagens</h3>
          <img src="/img.jpg" alt="Alguma imagem" />
          <h3>Imagem importada</h3>
          <img src={night} alt="Outra imagem" />
          <h3>Hooks</h3>
          <Data/>
          <h3>Arrays</h3>
          <ListRender/>
          <h3>Render condicional</h3>
          <Conditional/>
          <h3>Props</h3>
          <ShowUserName name="Alexandre"/>
          <h3>Desestruturando</h3>
          <CarDetails brand="Ford" km={1000} color="Verde"/>
          <h3>Reaproveitando componentes</h3>
          <CarDetails brand="Fiat" km={5000} color="Branco"/>
          <CarDetails brand="vw" color="Preto" km={9000}/>
          <h3>Renderização de lista com componentes</h3>
          {cars.map((car) => (
            <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
          ))}
          <h3>Fragment</h3>
          <Fragment/>
          <h3>Children</h3>
          <Container>
            <p>Alguma coisa</p>
          </Container>
          <h3>Função em prop</h3>
          <ExecuteFunction myFunction={showMessage}/>
          <h3>state lift</h3>
          <Message msg={message}/>
          <ChangeMessage handleMessage={handleMessage}/>
        </div>
        <h2>CSS no React</h2>
        <div className="div-content">     
          <h3>inline style dinâmico</h3>
          <p style={n > 10 ? {color: "red"} : {color: "magenta"}}>CSS dinâmico!</p>     
          <h3>Classes dinâmicas</h3>
          <p className={redTitle ? "red-title" : "title"}>Este título tem uma classe.</p>
          <h3>CSS modules</h3>
          <Title/>
        </div>
        <h2>Formulários e React</h2>
        <div className="div-content">
          <h3>Form em react</h3>
          <MyForm userName="Alexandre" userEmail="alexandre@gmail.com"/>
        </div>
      </div>
    </>
  )
}

export default App
