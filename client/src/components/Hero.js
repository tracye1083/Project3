import React from 'react';
import { Container } from 'react-bootstrap';
import background from "../components/images/cocktails.jpg";

function Hero() {
  return (
      <Container fluid>
        <div className='bg' style={{ backgroundImage: `url(${background})`}}>
        </div>
      </Container>
    
  );
}


export default Hero;