import React, { Fragment } from 'react';
import styled from 'styled-components';
import fluid from '../../services/fluid';

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 56px 0 0 0;

  p {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 2.5px;
    margin: 0;
  }

  p:nth-child(2) {
    margin: 32px 0;
  }

  span {
    color: var(--black);
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.5px;
    display: block;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: ${fluid.calc(128, 160, 'b', 'px')};
    margin-bottom: 0;

    p:nth-child(2) {
      margin: 0;
    }
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    margin: 0;
    margin-left: 96px;
    padding-top: 3px;

    p:nth-child(2) {
      margin: 64px 0;
      width: 189px;
    }
  }
`;

function Stats(props) {
 return (
  <Fragment>
    <DIV id='stats'>
      <p><span>2K+</span> COMPANIES</p>
      <p><span>8</span> LANGUAGES</p>
      <p><span>1.2M</span> LEADS</p>
    </DIV>
  </Fragment>
 );
}

export default Stats;