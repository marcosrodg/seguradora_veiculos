import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Selecionamos algumas ofertas pra voce!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/img1.jpg'
              text='Tenha a localizacao dos seus veiculos na palma da sua mão! Com nosso aplicativo fica 
              mais facil.'
              label='Eu quero'
              path='./cadastro'
            />
            <CardItem
              src='../images/img2.jpg'
              text='Faca agora mesmo uma avaliacao de apolice do seu veiculo'
              label='Simular'
              path='./cadastro'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/img1.jpg'
              text='Feche a compra de um pacote e Ganhe ate 50% de desconto!'
              label='Quero o desconto!'
              path='./registrar'
            />
            <CardItem
              src='./images/img1.jpg'
              text='Ja pesou em ter desconto na sua fatura? Aqui voce tem!'
              label='Ver mais'
              path='./cadastro'
            />
            <CardItem
              src='../images/img1.jpg'
              text='Ganhe 10% de desconto no segundo Veiculo!!'
              label='Saber mais'
              path='./cadastro'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
