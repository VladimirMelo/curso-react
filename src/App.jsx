import './App.css'

import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <footer>
        Rodapé
      </footer>
    </div>
  )
}

export default App
