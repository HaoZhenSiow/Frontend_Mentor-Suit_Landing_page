import React, { Fragment } from 'react';
import styled from 'styled-components';
import Jeremy from './Jeremy';
import curve from '../../assets/pattern-curved-line-2.svg';
import fluid from '../services/fluid';

const Section = styled.section`
  position: relative;
  color: var(--white);
  background-color: var(--black);
  text-align: center;
  padding: var(--container-padding);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: ${fluid.calc(237, 273, 's', 'px')}; */

  .curve {
    margin: var(--curve2-margin);
  }

  @media (min-width: 450px) {
    padding: 0 30px;
  }

  /* @media (min-width: 768px) {
    margin-top: 273px;
  } */

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }
`;

const Article = styled.article`

    color: var(--beige);
    font-size: var(--article-p-fs);
    line-height: var(--article-p-lh);

    margin-top: var(--article-mt);
    margin-bottom: var(--article-mb);

  h2 {
    font-weight: 400;
    font-size: var(--h2-fs);
    line-height: var(--h2-lh);
    letter-spacing: var(--h2-ls);
    margin-top: 0;
    margin-bottom: 40px;
  }

  p {
    margin: 0;
  }

  .name {
    color: revert;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.18px;
    margin-top: 40px;
  }

  .role {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 2.5px;
  }

  @media (min-width: 1200px) {
    width: 17.5em;
    text-align: left;
  }

`;

function Sect(props) {
 return (
  <Fragment>
    <Section aria-label='It just works'>
      <Jeremy/>
      <img src={curve} alt="curve" width="49.27" className='curve'/>
      <Article>
        <h2>It just <b>works</b></h2>
        <p>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.</p>
        <p className='name'>JEREMY ROBINSON</p>
        <p className='role'>CMO, FYLO</p>
      </Article>
      
    </Section>
  </Fragment>
 );
}

export default Sect;