import styled from 'styled-components';

const HeroButton = styled.button`
  width: var(--header-btn-w);
  height: var(--header-btn-h);
  background-color: transparent;
  color: var(--black);
  border: 1px solid var(--black);
  border-radius: 6px;
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: var(--header-btn-fs);
  line-height: var(--header-btn-lh);
  letter-spacing: var(--header-btn-ls);
  transition-property: color, background-color;
  transition-duration: 500ms;

  &:hover {
    background-color: var(--black);
    color: var(--white);
  }
`;

export default HeroButton;