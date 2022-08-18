import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    
    <C.Container styles={{backgroundImage:`url("../../images/freeDelivery.png")`}}>
      <C.Label>Pedir Socorro</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Sua Localizacao"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Seu Cep"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="digit"
          placeholder="Numero"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Ponto de Referencia"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.Label styles={{backgroundColor: '#fff'}}>
          <Button Text="Enviar Pedido de Socorro" onClick={handleLogin} />
        </C.Label>
        <Link to="/signup">&nbsp;Buscar Sua Localizacao</Link>
  
      </C.Content>
    </C.Container>
  );
};

export default Signin;
