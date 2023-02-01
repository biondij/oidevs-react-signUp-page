import Button from '../../components/Button';
import {useNavigate, useLocation} from "react-router-dom";
import { useState, useEffect } from 'react';



function Home(){
    const navigate = useNavigate()
    const location = useLocation()
    const [contador, setContador] = useState(0);

    const {listaDeUsuarios} = location.state;
    const {UsuArio} = location.state;


    const vaParaLogin = () => {
        navigate("/");

    } 

    useEffect(() => {
        localStorage.setItem('UserLogado', UsuArio.name);
        return () => {
            localStorage.removeItem('UserLogado')
            console.log("Apagando um item no localStorage")
        };

    }, [vaParaLogin]);


    useEffect(() => {
        console.log("executei")

    }, [contador]);

    
    return (
        <div>
            <h1>Olá, seja bem vindo.</h1>
            <h3>Lista de usuários</h3>
            <ul>
                {listaDeUsuarios.map((user)=> <li key ={user.id}> {user.email} </li>)}
            </ul>
            <h1>Contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <Button text="Volta" aoClicar={vaParaLogin} />
            
        </div>
    )
}

export default Home