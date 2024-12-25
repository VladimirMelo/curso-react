import { useState, useEffect } from "react";
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const url = "http://localhost:3000/proposta"

const Home = () => {
  // / 1 - resgatando dados
  // const [proposta, setProducts] = useState([]);
    
  // 4 custom hook
  const { data: items, httpConfig, loading } = useFetch(url)
  
  // 2 - enviando dados
  const [name, setName] = useState("")
  const slug = createSlug(name)
  const [price, setPrice] = useState("")
  const [msg, setMsg] = useState("")
  
  function createSlug(name) {
      return name
      .toLowerCase()                 // Transforma em minúsculas
      .normalize("NFD")               // Remove acentos e caracteres especiais
      .replace(/[\u0300-\u036f]/g, "") // Elimina marcas diacríticas (acentos)
      .replace(/[^a-z0-9]+/g, "-")    // Substitui espaços e outros caracteres por "-"
      .replace(/(^-|-$)/g, "");       // Remove hifens extras no início e fim
  }
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (name === '') {
          setMsg('Preencha o campo nome')
          return false
      }
      
      if (price === '') {
          setMsg('Preencha o campo preço')
          return false
      }
      
      const proposta = {
          name,
          slug,
          price,
      };
      
      // 5 - refatorando post
      httpConfig(proposta, "POST");
      setName("")
      setPrice("")
      setMsg("")
      return true
  };

  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }
  
  return (
    <div className='Home'>
    <div className="add-product">
      <h4>{msg}</h4>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
        </label>
        
        <label>
          Preço:
          <input type="number" min="1" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
        </label>

        {loading && <button className="button" type="submit" disabled>Aguarde...</button>}
        {!loading && <button className="button" type="submit">Adicionar</button>}
      </form>
    </div>
    
    <ul>
    {items && items.map((item) => (
      <li key={item.id}>
      <Link to={`proposta/${item.id}`}>
      <h2>{item.name}</h2>
      <h3>R$ {item.price}</h3>
      </Link>
      <button onClick={() => handleRemove(item.id)}>Excluir</button>
      </li>
    ))}
    </ul>
    </div>
  )
}

export default Home