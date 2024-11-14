import { useFetch } from "../hooks/useFetch"
import { useParams } from "react-router-dom"

const Proposta = () => {
    const { id } = useParams();

  const url = "http://localhost:3000/proposta/" + id;

  const { data: proposal, loading, error } = useFetch(url);

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {proposal && (
        <div>
          <h1>{proposal.name}</h1>
          <p>R${proposal.price}</p>
        </div>
      )}
    </>
  )
}

export default Proposta