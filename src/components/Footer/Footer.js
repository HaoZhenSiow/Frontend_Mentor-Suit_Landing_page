import React, { Fragment } from 'react';
import styled from 'styled-components';
import logo from '../../assets//logo.svg';
import fb from '../../assets//icon-facebook.svg';
import ig from '../../assets//icon-instagram.svg';
import tw from '../../assets//icon-twitter.svg';
import Section from './Section';

const FOoter = styled.footer`
position: relative;
  background-color: var(--beige);
  padding: var(--container-padding);
  padding-top: var(--footer-pt);
  padding-bottom: 72px;
  margin-top: var(--footer-mt);

  
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  & > div > p {
    font-size: 15px;
    line-height: 32px;
    letter-spacing: 0.08px;
    margin: 33px 0;
  }

  @media (min-width: 768px) {
    & > div {
      flex-direction: row;
      justify-content: space-between;
    }

    & > div > p {
      font-size: 15px;
      line-height: 32px;
      letter-spacing: 0.08px;
      margin: 0;
    }
  }
`;

const Social = styled.div`
  width: 116px;
  display: flex;
  justify-content: space-between;
  & > a {
    line-height: 0;
  }
  & > a:hover {
    opacity: 0.5;
  } 
`;

function Footer(props) {
 return (
  <Fragment>
    <FOoter>
      <Section/>
      <div>
        <img src={logo} alt="logo"/>
        <p>Copyright - Suite</p>
        <Social>
          <a href="facebook.com"><img src={fb} alt='facebook'/></a>
          <a href="instagram.com"><img src={ig} alt='instagram'/></a>
          <a href="twitter.com"><img src={tw} alt='twitter'/></a>
        </Social>
      </div>
    </FOoter>
  </Fragment>
 );
}

export default Footer;