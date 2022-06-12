import React from 'react';
import styled from 'styled-components';
import Jeremy from '../Article/Jeremy';
import curve from '../../assets/pattern-curved-line-2.svg';
import Article from './Article';


const SECTION = styled.section`
  color: var(--white);
  background-color: var(--black);
  text-align: center;
  width: var(--section-width);
  height: var(--section-height);
  padding: 0 var(--article-padding-x);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: var(--section-bottom);

  @media (min-width: 860px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const Curve2 = styled.img`
  width: 49.27px;
  height: 40px;
  margin: var(--curve2-margin);

  @media (min-width: 860px) {
    width: 64.05px;
    height: 52px;
  }
`;

function Section(props) {
 return (
  <SECTION aria-label='it just works'>
      <Jeremy/>
      <Curve2 src={curve} alt="curve" className='curve'/>
      <Article/>
  </SECTION>
 );
}

export default Section;