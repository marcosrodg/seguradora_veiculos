
import React, { useState } from "react"; 
import { Form, Col, Button, Row } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
const axios = require("axios"); 
 
export const cpfMask = (value) => { 
  console.log("Dentro do CPF"); 
  return value 
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada 
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero 
    .replace(/(\d{3})(\d)/, "$1.$2") 
    .replace(/(\d{3})(\d{1,2})/, "$1-$2") 
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada 
}; 
 
export const cepMask = (value) => { 
  return value 
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada 
    .replace(/(\d{5})(\d)/, "$1-$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero 
    .replace(/(-\d{3})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada 
}; 
 
function Cliente(props) { 
  const [nome, setNome] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [cpf, setCpf] = useState(""); 
  const [cep, setCep] = useState(""); 
  const [rua, setRua] = useState(""); 
  const [cidade, setCidade] = useState(""); 
  const [bairro, setBairro] = useState("");
  const [Celular, setCelular] = useState(""); 
  const [Telefone1, setTelefone1] = useState("");
  const [Telefone2, setTelefone2] = useState(""); 
  const [Modelo, setModelo] = useState(""); 
  const [Placa, setPlaca] = useState(""); 
  const [Cor, setCor] = useState(""); 
 
  const onChangeNome = (event) => { 
    setNome(event.target.value); 
  }; 
 
  const onChangeEmail = (event) => { 
    setEmail(event.target.value); 
  };

  const onChangeCelular = (event) => { 
    setCelular(event.target.value); 
  }; 
 
  const onChangeTelefone1 = (event) => { 
    setTelefone1(event.target.value); 
  }; 
 const onChangeTelefone2 = (event) => { 
    setTelefone2(event.target.value); 
  }; 
 const onChangeModelo = (event) => { 
    setModelo(event.target.value); 
  }; 
 const onChangePlaca = (event) => { 
    setPlaca(event.target.value); 
  }; 
 const onChangeCor= (event) => { 
    setCor(event.target.value); 
  }; 
 
 
  async function onChangeCep(e) { 
    setCep(cepMask(e.target.value)); 
    if (String(e.target.value).length == 9) { 
      let cepPonto = e.target.value; 
      let cepSemPonto = cepPonto.replace("-", ""); 
      let retorno = await axios.get("https://viacep.com.br/ws/${cepSemPonto}/json"); 
      console.log(retorno.data.logradouro); 
      console.log(retorno); 
      setRua(retorno.data.logradouro); 
      setCidade(retorno.data.localidade); 
    } 
  } 
 
  const onChangeCpf = (event) => { 
    setCpf(cpfMask(event.target.value)); 
  }; 
 
  const onChangeRua = (event) => { 
    setRua(event.target.value); 
  }; 
 
  const onChangeCidade = (event) => { 
    setCidade(event.target.value); 
  }; 
 
  return ( 

    <div className="CadastroEmpresa"> 
      <div 
        className="ContainerCadastro" 
        style={({ marginTop: "10px"}, { marginLeft: "700px" })} 
      > 
        <h2>  Cadastro De Novos Veiculos </h2> 
      </div> 
      <div 
        className="Formulario" 
        style={({ marginTop: "5px" }, { marginLeft: "20px" })} 
      > 
        <Form style={{ margin: "1px" }}> 
          <Row> 
            <Col sm={8}> 
              <div className="txtNome"> 
                <Form.Label className="text-left" style={{ width: "100%" }}> 
                  Nome 
                </Form.Label> 
                <Form.Control value={nome} onChange={onChangeNome} /> 
              </div> 
            </Col> 
            <Col sm={4}> 
              <div className="txtEmail"> 
                <Form.Label className="text-left" style={{ width: "100%" }}> 
                  E-mail 
                </Form.Label> 
                <Form.Control value={email} onChange={onChangeEmail} /> 
              </div> 
            </Col> 
          </Row> 
          <Row> 
            <Col sm={6}> 
              <div className="txtCPF"> 
                <Form.Label className="text-left" style={{ width: "100%" }}> 
                  CPF 
                </Form.Label> 
                <Form.Control value={cpf} onChange={onChangeCpf} /> 
              </div> 
            </Col> 
            <Col sm={4}> 
              <div className="txtCep"> 
                <Form.Label className="text-left" style={{ width: "100%" }}> 
                  CEP 
                </Form.Label> 
                <Form.Control value={cep} onChange={onChangeCep} /> 
              </div> 
            </Col>
            </Row> 
            <Row> 
                <Col sm={8}> 
                 <div className="txtRua"> 
                   <Form.Label className="text-left" style={{ width: "100%" }}> 
                     Rua 
                    </Form.Label> 
                    <Form.Control value={rua} onChange={onChangeRua} /> 
                  </div> 
                </Col> 
                <Col sm={4}> 
                 <div className="txtCidade"> 
                 <Form.Label className="text-left" style={{ width: "100%" }}> 
                     Cidade 
                    </Form.Label> 
                    <Form.Control value={cidade} onChange={onChangeCidade} /> 
                </div> 
                </Col> 
            </Row>
            <Row> 
                <Col sm={4}> 
                 <div className="txtCelular"> 
                   <Form.Label className="text-left" style={{ width: "100%" }}> 
                     Celular
                    </Form.Label> 
                    <Form.Control value={Celular} onChange={onChangeCelular} /> 
                  </div> 
                </Col> 
                <Col sm={4}> 
                 <div className="txtTelefone1"> 
                 <Form.Label className="text-left" style={{ width: "100%" }}> 
                     Telefone1
                    </Form.Label> 
                    <Form.Control value={Telefone1} onChange={onChangeTelefone1} /> 
                </div> 
                </Col>
                <Col sm={4}> 
                 <div className="txtTelefone2"> 
                 <Form.Label className="text-left" style={{ width: "100%" }}> 
                     Telefone2
                    </Form.Label> 
                    <Form.Control value={Telefone2} onChange={onChangeTelefone2} /> 
                </div> 
                </Col>
            </Row>
            <Row> 
                <Col sm={4}> 
                 <div className="txtModelo"> 
                   <Form.Label className="text-left" style={{ width: "100%" }}> 
                     Modelo do Veiculo
                    </Form.Label> 
                    <Form.Control value={Modelo} onChange={onChangeModelo} /> 
                  </div> 
                </Col> 
                <Col sm={4}> 
                 <div className="txtPlaca"> 
                 <Form.Label className="text-left" style={{ width: "100%" }}> 
                     Placa do Veiculo
                    </Form.Label> 
                    <Form.Control value={Placa} onChange={onChangePlaca} /> 
                </div> 
                </Col>
                <Col sm={4}> 
                 <div className="txtCor"> 
                 <Form.Label className="text-left" style={{ width: "100%" }}> 
                     Cor do Veiculo
                    </Form.Label> 
                    <Form.Control value={Cor} onChange={onChangeCor} /> 
                </div> 
                </Col>
            </Row>
            <Row> 
                <Form.Label>Foto do Veiculo</Form.Label>
                <Form.Control
                type="file"
                required
                name="file"
                />    
            </Row>
             <div 
        className="ContainerCadastro" 
        style={({ marginLeft: "700px", marginTop: "100px" })}
        > 
        <button type="button" class="btn btn-primary">Envie Aqui Seu formulario para Avaliacao</button> 
      </div> 
        </Form> 
      </div> 
    </div> 
  ); 
} 
 
export default Cliente;