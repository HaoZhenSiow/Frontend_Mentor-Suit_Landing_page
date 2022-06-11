import React from 'react';
import styled from 'styled-components';
import HeroContent from './HeroContent';
import Stats from './stats';

const DIV = styled.div`
  color: var(--black);
  font-size: var(--body-fs);
  line-height: var(--body-lh);
  letter-spacing:var(--body-ls);
  margin: var(--container-padding);
  margin-top: var(--hero-mt);
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

function Hero(props) {
 return (
  <React.Fragment>
    <DIV>
      <HeroContent/>
      <Stats/>
    </DIV>
  </React.Fragment>
 );
}

export default Hero;