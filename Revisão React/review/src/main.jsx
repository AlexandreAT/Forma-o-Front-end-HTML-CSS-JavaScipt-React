import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Configurando o router
import{ createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";
import { Contact } from './routes/Contact.jsx';

// Pagina de erro
import { ErrorPage } from './routes/ErrorPage.jsx';

// Componente base
import { BaseComponent } from './BaseComponent.jsx';

// Rota dinâmica
import { Product } from './routes/Product.jsx';

// Rotas aninhadas
import { Info } from './routes/Info.jsx';

// Search Params
import { Search } from './routes/Search.jsx';

// Criando provider
import { CounterContextProvider } from './context/CounterContext.jsx';

// Contexto mais complexo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';

// Hooks - context (revisando)
import { HookUseContext } from './components/HookUseContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseComponent />,
    errorElement: <ErrorPage />,
    // Componente base
    children:[
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // Rota dinâmica
      {
        path: "products/:id",
        element: <Product/>,
      },
      // Rota aninhada
      {
        path: "products/:id/info",
        element: <Info/>,
      },
      // Search Params
      {
        path: "search",
        element: <Search/>,
      },
      // Redirect
      {
        path: "teste",
        element: <Navigate to="/"/>
      }
    ]
  },
  //{
    //path: "/contact",
    //element: <Contact />,
  //}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <HookUseContext>
          <RouterProvider router={router} />
        </HookUseContext>
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
