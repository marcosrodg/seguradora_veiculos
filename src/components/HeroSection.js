import React from 'react';
import '../App.css';
import Button  from './Butao';
import './HeroSection.css';

function HeroSection() {

  return (
    <div className='hero-container'>
      
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contrate Agora
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'     
        >
          Escolha seu Plano <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
