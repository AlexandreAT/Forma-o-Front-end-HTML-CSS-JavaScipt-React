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

// Requisição HTTP - Import do useEffect
import { useEffect } from 'react';
const url = "http://localhost:3000/products"; // Caminho para a API

// Custom hook
import { useFetch } from './hooks/useFetch';

// Rota dinâminaca
import { Link } from "react-router-dom"

// Context - Aleterando o valor
// import { useContext } from 'react';
// import { CounterContext } from './context/CounterContext';
import { ChangeCounter } from './components/ChangeCounter';
// Context - refatorando com hook
import { useCounterContext } from './hooks/useCounterContext';
// Contexto mais complexo
import { useTitleColorContext } from './hooks/useTitleColorContext';

// Hooks
import { HookUseState } from './components/HookUseState';
import { HookUseReducer } from './components/HookUseReducer';
import { HookUseEffect } from './components/HookUseEffect';
// context
import { useContext } from 'react';
import { SomeContext } from './components/HookUseContext';
// ...
import { HookUseRef } from './components/HookUseRef';
import { HookUseCallback } from './components/HookUseCallback';
import { HookUseMemo } from './components/HookUseMemo';
import { HookUseLayoutEffect } from './components/HookUseLayoutEffect';
import { HookUseImperativeHandle } from './components/HookUseImperativeHandle';
import { HookCustom } from './components/HookCustom';

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

  // Requisição HTTP - Resgatando dados
  const [products, setProducts] = useState([]);

  // Custom hook - Refatorando o fetch
  const{ data: items, httpConfig, loading, error } = useFetch(url);

  // Refatorado
  //useEffect(() => {
    //async function getData(){
      //const res = await fetch(url)
      //const data = await res.json();
      //setProducts(data);
    //}
    //getData();
  //}, [])

  // Requisição HTTP - Envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    }

    // Refatorando o post
    httpConfig(product, "POST");

    // Refatorado
    //const res = await fetch(url, {
      //method: "POST", 
      //headers:{"Content-Type": "application/json",},
      //body: JSON.stringify(product),  
    //});

    // Carregamento dinâmico
    //const addedProduct = await res.json();

    //setProducts((prevProducts) =>[...prevProducts, addedProduct])
  };  

  // Context
  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();
  // Contexto mais complexo
  const {color, dispatch } = useTitleColorContext();
  const setTitleColor = (color) => { dispatch({type: color}) }

  // Hooks - context (revisão)
  const {contextValue} = useContext(SomeContext);

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
        <h2>Requisições HTTP</h2>
        <div className="div-content">
          <h3>Requisição utilizando a Fetch API</h3>
          {/* Loading */}
          {loading && <p>Carregando...</p>}
          {/* Tratando erro */}
          {error && <p>{error}</p>}
          <ul>
            {items && items.map((product) => (
              <li key={product.id}>{product.name} - {product.price}</li>
            ))}
          </ul>
          <h3>Enviando dados</h3>
          <div className="add-product">
            <form onSubmit={handleSubmit}>
              <label>
                <span>Nome:</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                <span>Preço:</span>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
              </label>
              {/* <input type="submit" value="Enviar" /> */}
              {/* Loading - post */}
              {loading && <input type="submit" disabled value="Aguarde" />}
              {!loading && <input type="submit" value="Criar" />}
            </form>
          </div>
        </div>
        <h2>React Router</h2>
        <div className="div-content">
          {/* Carregando dados */}
          <ul className='products'>
              {items && items.map((item) => (
                <li key={item.id}><h4>{item.name}</h4> <p>R$: {item.price}</p> {/* Rota dinâmica -> */} <Link to={`/products/${item.id}`}>Detalhes</Link></li>
              ))}
          </ul>
        </div>
        <h2>Context API</h2>
        <div className="div-content">
          <p>Valor do contadora (vindo da context): {counter}</p>
          <ChangeCounter/>
          <h3>Contexto mais complexo</h3>
          <p style={{color: color}}>Texto com cor</p>
          <h3>Alterando o contexto complexo</h3>
          <div>
            <button onClick={() => setTitleColor("RED")}>Vermelho</button>
            <button onClick={() => setTitleColor("BLUE")}>Azul</button>
          </div>
        </div>
        <h2>Hooks</h2>
        <div className="div-content">
          <h3>useState</h3>
          <HookUseState/>
          <h3>useReducer</h3>
          <HookUseReducer/>
          <h3>useEffect</h3>
          <HookUseEffect/>
          <h3>useContext</h3>
          <p>Valor do contexto: {contextValue}</p>
          <hr />
          <h3>useRef</h3>
          <HookUseRef/>
          <h3>useCallback</h3>
          <HookUseCallback/>
          <h3>useMemo</h3>
          <HookUseMemo/>
          <h3>useLayoutEffect</h3>
          <HookUseLayoutEffect/>
          <h3>HookUseImperativeHandle</h3>
          <HookUseImperativeHandle/>
          <h3>Custom Hooks</h3>
          <HookCustom/>
        </div>
      </div>
    </>
  )
}

export default App
