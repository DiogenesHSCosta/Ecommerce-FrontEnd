import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    
    <header>
      <div>
        <p>LOGO</p>
      </div>

      <nav>
        <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/Login'>LOGIN</Link></li>
            <li><Link to='/CadastroUsuario'>Cadastro</Link></li>
            <li><Link to='/CadastroProduto'>Cadastro Produtos</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}
