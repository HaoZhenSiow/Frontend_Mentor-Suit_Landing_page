import React from 'react';
import large from '../../assets/image-jeremy-large.png';
import large2x from '../../assets/image-jeremy-large@2x.png';
import largeWebp from '../../assets/image-jeremy-large.webp';
import largeWebp2x from '../../assets/image-jeremy-large@2x.webp';
import small from '../../assets/image-jeremy-small.png';
import small2x from '../../assets/image-jeremy-small@2x.png';
import smallWebp from '../../assets/image-jeremy-small.webp';
import smallWebp2x from '../../assets/image-jeremy-small@2x.webp';
import blur from '../../assets/pattern-blur.svg';
import styled from 'styled-components';
import fluid from '../services/fluid';

const Pic = styled.picture`
  display: inline-block;
  line-height: 0;
  position: relative;

  img {
    position: absolute;
    top: -181px;
    right: 50%;
    transform: translateX(50%);
  }

  @media (min-width: 768px) {
    background-image: url(${blur});
    background-size: ${fluid.calc(160, 125, 'b', '%')};
    background-repeat: no-repeat;
    background-position: 50% ${fluid.calc(80, 100, 'b', 'px')};
  }

  @media (min-width: 1200px) {
    position: relative;
    bottom: 0;
    width: 375px;
    height: 500px;

    img {
      position: absolute;
      top: unset;
      bottom: 0;
    }
  }
`;

function Jeremy(props) {
 return (
  <Pic>
    <source media="(min-width: 1200px)" srcSet={`${largeWebp2x} 2x, ${largeWebp} 1x`} type="image/webp" />
    <source media="(min-width: 1200px)" srcSet={`${large2x} 2x, ${large} 1x`} type="image/png" />
    <source srcSet={`${smallWebp2x} 2x, ${smallWebp} 1x`} type="image/webp" />
    <source srcSet={`${small2x} 2x, ${small} 1x`} type="image/png" />
    <img src={small} alt="Jeremy"/>
  </Pic>
 );
}

export default Jeremy;