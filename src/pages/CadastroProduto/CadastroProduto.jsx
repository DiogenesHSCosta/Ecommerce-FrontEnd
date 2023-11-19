import axios from "axios";
import { useState } from "react";

export default function CadastroProduto() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  
  async function postApi() {
    await axios.post("http://localhost:3000/Produto", {titulo, autor, genero, descricao, valor});
    window.alert('produto cadastrado')
  }

  return (
    <main>
        <h1>tela de cadastro produto</h1>

        <form>
          <input
            type="text"
            placeholder="titulo"
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Autor"
            onChange={(e) => setAutor(e.target.value)}
          />
          <input
            type="text"
            placeholder="genero"
            onChange={(e) => setGenero(e.target.value)}
          />
          <input
            type="text"
            placeholder="descricao"
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            type="numeric"
            placeholder="valor"
            onChange={(e) => setValor(e.target.value)}
          />
          <button onClick={postApi}>Adicionar Produto</button>
        </form>
    </main>
  );
}
