// import React from 'react'

import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const url = "http://localhost:3000/proposta"

const Home = () => {
  const { data: items } = useFetch(url);

  return (
    <div className='Home'>
      <h1>Página inicial</h1>

      <ul>
        {items && items.map((item) => (
          <li key={item.id}>
            <Link to={`proposta/${item.id}`}>
              <h2>{item.name}</h2>
              <h3>R$ {item.price}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home