import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios  from "axios";
import './CadastroUsuario.css'

export default function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate()

  async function postApi() {
    await axios.post("http://localhost:3000/Usuario", {nome, email, senha});
    // voltarHome()
  }

  // const voltarHome = () =>{
  //   window.alert('Cadastro Efetuado');
  //   navigate('/')
  // }




  return (
    <main>
        <h1>tela de cadastro usuario</h1>
        <form className="formulario-cadastro">
          <input
            type="text"
            placeholder="nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            onChange={(e) => setSenha(e.target.value)}
          />
          <button onClick={postApi}>Adicionar Produto</button>
        </form>

        
    </main>
  );
}
