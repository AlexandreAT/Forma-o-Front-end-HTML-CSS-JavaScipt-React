import { useFetch } from "../hooks/useFetch"
import { useParams, Link } from "react-router-dom"

export const Product = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/products/" + id;

    const {data:product} = useFetch(url);
    
    if(!product){
        return <p>Carregando...</p>;
    }

    return (
    <div>
        <p>ID do produto: {product.id}</p>
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            {/* Rotas aninhadas */}
            <Link to={`/products/${product.id}/info`}>Mains informações</Link>
        </div>
    </div>
  )
}
