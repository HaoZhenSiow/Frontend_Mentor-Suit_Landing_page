import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import HeaderButton from './HeaderButton';
import Hero from './Hero/Hero';

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--header-mt);
  margin-bottom: var(--header-mb);
  padding: var(--container-padding);

  .logo {
    width: 78.41px;
    height: 24.8px;
    position: relative;
    left: 1px;
    top: -3px;
  }
`;

function Header(props) {
 return (
  <header>
    <DIV>
      <img className='logo' src={logo} alt="logo"/>
      <HeaderButton>Request Beta Access</HeaderButton>
    </DIV>
    <Hero/>
  </header>
 );
}

export default Header;