import { useNavigate } from "react-router-dom";

export default function Login() {

const navigate = useNavigate()

  const voltarHome = () =>{
    window.alert('Login Efetuado');
    navigate('/')
  }
  return (
    <main>
        <h1>tela de Login</h1>
        <button onClick={voltarHome}> login</button>
    </main>
  );
}
