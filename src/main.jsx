import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Proposta from "./routes/Proposta.jsx";

const router =  createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "proposta/:id",
        element: <Proposta />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
