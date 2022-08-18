import React from 'react';
import './Footer.css';
import Button  from './Butao';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Receba nossas promocoes por email!
        </p>
        <p className='footer-subscription-text'>
          Voce pode subscrever a qualquer momento
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <div className='sub-btns'>
               <Button>
                  subscribe
              </Button>

            </div>
            
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;
