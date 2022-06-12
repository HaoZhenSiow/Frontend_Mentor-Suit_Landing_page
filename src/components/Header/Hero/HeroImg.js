import React, { Fragment } from 'react';
import landscapePng from '../../../assets/image-hero-landscape.png';
import landscape2xPng from '../../../assets/image-hero-landscape@2x.png';
import landscapeWebp from '../../../assets/image-hero-landscape.webp';
import landscape2xWebp from '../../../assets/image-hero-landscape@2x.webp';
import portraitPng from '../../../assets/image-hero-portrait.png';
import portrait2xPng from '../../../assets/image-hero-portrait@2x.png';
import portraitWebp from '../../../assets/image-hero-portrait.webp';
import portrait2xWebp from '../../../assets/image-hero-portrait@2x.webp';
import styled from 'styled-components';

const Pic = styled.picture`
  line-height: 0;
  width: var(--hero-img-w);
  z-index: -1;
  position: relative;

  & > * {
    width: 100%;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: var(--hero-img-t);
    right: 0;
  }

`;

function HeroImg(props) {
 return (
  <Fragment>
    <Pic>
      <source media='(min-width: 768px)' srcSet={`${portrait2xWebp} 2x, ${portraitWebp} 1x`} type="image/webp" />
      <source media='(min-width: 768px)' srcSet={`${portrait2xPng} 2x, ${portraitPng} 1x`} type="image/png" />
      <source srcSet={`${landscape2xWebp} 2x, ${landscapeWebp} 1x`} type="image/webp" />
      <img srcSet={`${landscape2xPng} 2x, ${landscapePng} 1x`} src={landscapePng} alt='hero' />
    </Pic>
  </Fragment>
 );
}

export default HeroImg;