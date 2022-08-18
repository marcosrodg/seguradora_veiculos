import React from 'react';
import './style.css';
import {Button} from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

function Sobre(){
    return ( 
        
        <div className="sobre">
            <h1>Nossos Canais de Comunicacao</h1>
            <br /> 
            <div className="text">
                <div className="d-grid gap-2">
                <Button variant="success" size="lg" href="https://api.whatsapp.com/send?phone=5534992164388&text=Bem%20vindo">
                    Chame nossos atendentes pelo whatsapp
                </Button>
                <br />
                <Button variant="danger" size="lg">
                    Temos um instagram repleto de novidades
                </Button>
                <br />
                <Button variant="primary" size="lg">
                    Nosso Facebook postamos muitas promocoes diarias
                </Button>
                <br />
                <Button variant="warning" size="lg">
                    Assine nossa Newsletter
                </Button>
                <br />
                <Button variant="secondary" size="lg">
                    Temos um canal no discord pra voce que deseja tirar duvidas
                </Button>
                
                </div>
                
            </div>
        <footer className="botton-h">
                <h1>HELP</h1> <h1 id="car">CAR</h1>
        </footer>
    </div> 
     );
}

 
export default Sobre;