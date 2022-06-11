import React, { Fragment } from 'react';
import styled from 'styled-components';
import Curved from './../../../assets/pattern-curved-line-1.svg';
import HeroImg from './HeroImg';

const DIV = styled.div`
  position: relative;
  width: 100%;
`;

const H1 = styled.h1`
  font-weight: 400;
  font-size: var(--h1-fs);
  line-height: var(--h1-lh);
  letter-spacing: var(--h1-ls);
  margin: 0;

  .solution {
    position: relative;
  }

  .solution::before {
    content: '';
    display: inline-block;
    width: var(--header-curve1-w);
    height: var(--header-curve1-h);
    background-image: url(${Curved});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: var(--header-curve1-t);
    right: 0;

  }
`;

const P = styled.p`
  max-width: 350px;
  margin-top: var(--header-p-mt);
  margin-bottom: var(--header-p-mb);
  letter-spacing:var(--header-p-ls);
`;

const Button = styled.button`
  width: 256px;
  height: 61px;
  border-radius: 6px;
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.18px;
  background-color: var(--black);
  color: var(--white);
  border: 0;
  margin-bottom: var(--cta-btn-mb);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background-image: var(--gradient);
  }
`;

function HeroContent(props) {
 return (
  <Fragment>
    <DIV id='hero-content'>
        <H1>A <b>super</b> <b className='solution'>solution</b><br/>for your <b>business.</b></H1>
        <P>Our marketing and sales automations help you scale your outreach to get more leads for your company.</P>
        <Button>Request Beta Access</Button>
        <HeroImg/>
    </DIV>
  </Fragment>
 );
}

export default HeroContent;