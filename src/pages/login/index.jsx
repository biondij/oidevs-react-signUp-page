import '../../App.css';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';
import SpanLink from '../../components/Link';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const App = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("Login");
    const [subtitle, setSubtitle] = useState("User");

    const vaParaHome = () => {
        navigate("/home");
    }

    const mudarTitulo = () => {
        setTitle("Novo título");
    }

    const mudarSub = (e) => {
        setSubtitle(e.target.value);
    }

    return (
        <div className="container">
            <Title title={title} />
            <Title title={subtitle} />
            <Input label="Usuário" onChange={mudarSub} />
            <Input label="Senha" />
            <Button text="Entrar" handleClick={vaParaHome} />
            <Button text="Trocar título" handleClick={mudarTitulo} />
            <SpanLink span="Esqueceu a senha?" />
        </div>
    );
}

export default App;