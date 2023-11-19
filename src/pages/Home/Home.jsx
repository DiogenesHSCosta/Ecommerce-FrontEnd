import axios from "axios";
import { useEffect, useState } from "react";

import './Home.css'
export default function Home() {
  const [produtos, setProdutos] = useState([])

  async function getApi() {
    const dados = await axios.get("http://localhost:3000/Produto/");
    setProdutos(dados.data);
  }

  useEffect(() => {
    getApi();
    
  }, []);

  return (
    <main>
        <h1>tela Home</h1>

      <ul className="produtos-lista">
        {produtos.map((element) =>(
          <li key={element?.id} className='item-lista'>
            <p>{element.titulo}</p>
            <p>{element.descricao}</p>
            <p>{element.valor}</p>
          </li>
        ))}
      </ul>
      
    </main>
  );
}
