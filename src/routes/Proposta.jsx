import { useFetch } from "../hooks/useFetch"
import { useParams } from "react-router-dom"

const Proposta = () => {
  const { id } = useParams();
  
  const url = "http://localhost:3000/proposta/" + id;
  
  const { data: item, httpConfig, loading, error } = useFetch(url);

  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }
  
  return (
    <>
    <p>ID: {id}</p>
    {error && <p>Ocorreu um erro...</p>}
    {loading && <p>Carregando...</p>}
    {item && (
      <div>
      <h1>{item.name}</h1>
      <p>R${item.price}</p>
      {/* <Link to={`/proposta/${item.id}/info`}>Mais informações</Link> */}

      <button onClick={() => handleRemove(id)}>Excluir</button>
      </div>
    )}
    </>
  )
}

export default Proposta