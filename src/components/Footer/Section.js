import React from 'react';
import styled from 'styled-components';

const SECTION = styled.section`
  color: var(--white);
  background-color: var(--black);
  text-align: center;
  width: var(--section-width);
  height: var(--section-height);
  padding: var(--container-padding);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: var(--section-left);
  bottom: var(--section-bottom);
`;

function Section(props) {
 return (
  <SECTION aria-label='it just works'>
  </SECTION>
 );
}

export default Section;