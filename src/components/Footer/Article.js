import React from 'react';
import styled from 'styled-components';

const ARTICLE = styled.article`
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

  @media (min-width: 860px) {
    width: 17.5em;
    text-align: left;
    align-self: center;
  }
`;

function Article(props) {
 return (
  <ARTICLE>
    <h2>It just <b>works</b></h2>
    <p>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.</p>
    <p className='name'>JEREMY ROBINSON</p>
    <p className='role'>CMO, FYLO</p>
  </ARTICLE>
 );
}

export default Article;