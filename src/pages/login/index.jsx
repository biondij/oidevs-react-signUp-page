import '../../App.css';
import Button from '../../components/Button';
import Title from '../../components/Title/Index';
import Input from '../../components/Input';
import Span from '../../components/Link';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import Subtitle from '../../components/Subtitle/Index';

const App = () => {
    const navigate = useNavigate()
    const [title,setTitle] = useState("Login")
    const [showError,setShowError] = useState(false)
    const [nomedeUsuario,setNomeDeUsuario] = useState("")
    const [senha,setSenha] = useState("")
    const [inputColor,setInputColor] = useState("")
    const [usuarios] = useState([
      {
        id:1,
        name:"Dwight",
        email:"dwight@gmail.com",
        password:"oidevs",
      },
      {
        id:2,
        name:"Michael",
        email:"michael@gmail.com",
        password:"oidevs",
      },
      {
        id:3,
        name:"Jim",
        email:"jim@gmail.com",
        password:"oidevs",
      },
      {
        id:4,
        name:"Pam",
        email:"pam@gmail.com",
        password:"oidevs",
      },
      {
        id:5,
        name:"Andy",
        email:"andy@gmail.com",
        password:"oidevs",
      },
      {
        id:6,
        name:"Angela",
        email:"angela@gmail.com",
        password:"oidevs",
      },
    ]);

    const vaParaHome = () =>{
      console.log(nomedeUsuario);
      console.log(senha);

      const usuarioEscolhido = usuarios.find(
        usuario => usuario.email === nomedeUsuario && usuario.password === senha)

      if (usuarioEscolhido){
        navigate('/home', {state:{ listaDeUsuarios:usuarios, UsuArio: usuarioEscolhido}})
      } else {
        setShowError(true)
        setInputColor("#ff0000")
      }
      
      console.log(usuarioEscolhido)
      
    }

    const mudarTitulo = () => {
        setTitle("Sucesso de Goiás");
    } 

  return (
    <div className="container">
      <Title title={title} />
      {showError === true ?  (<Subtitle text ={"Credenciais Inválidas"} />) : (<Title title={"Ainda não digitou"} />)}

      <Input 
        label="Usuário" 
        cor= {inputColor}
        onChange={(e)=>setNomeDeUsuario(e.target.value)} />

      <Input 
        label="Senha"
        cor= {inputColor}
        hideContent
        onChange={(e)=>setSenha(e.target.value)} />
      
      <Button text="Entrar" onClick={vaParaHome} />
      <Button text="Trocar título" onClick={mudarTitulo} />
      <Span span="Esqueceu a senha?"/>

    

    </div>
  );
}

export default App;