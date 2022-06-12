import { createGlobalStyle } from 'styled-components';
import fluid from "./fluid";

const GlobalStyle = createGlobalStyle`
:root {
  --black: #172339;
  --grey: #49566d;
  --beige: #F3EDE7;
  --white: #FAF8F6;
  --gradient: linear-gradient(135deg, rgba(160,96,255,1) 0%, rgba(203,48,227,1) 50%, rgba(255,168,78,1) 100%);

  --container-padding: 0 ${fluid.calc(16, 39, 's', 'px')};

  --h1-fs: ${fluid.calc(38, 56, 's', 'px')};
  --h1-lh: ${fluid.calc(44, 64, 's', 'px')};
  --h1-ls: ${fluid.calc(-0.53, -0.78, 's', 'px')};
  --h2-fs: 40px;
  --h2-lh: 48px;
  --h2-ls: -0.42px;
  --h2-mt: 0;
  --body-fs: 16px;
  --body-lh: 28px;
  --body-ls: 0.9px;

  --header-mt: ${fluid.calc(24, 40, 's', 'px')};
  --header-mb: ${fluid.calc(56, 80, 's', 'px')};
  --header-btn-w: ${fluid.calc(182, 219, 's', 'px')};
  --header-btn-h: ${fluid.calc(48, 56, 's', 'px')};
  --header-btn-fs: ${fluid.calc(14, 16, 's', 'px')};
  --header-btn-lh: ${fluid.calc(24, 32, 's', 'px')};
  --header-btn-ls: ${fluid.calc(-0.14, -0.16, 's', 'px')};
  --header-curve1-w: ${fluid.calc(151.47, 231.19, 's', 'px')};
  --header-curve1-h: ${fluid.calc(19, 29, 's', 'px')};
  --header-curve1-t: ${fluid.calc(-27.32, -45.32, 's', 'px')};
  --header-curve1-r: ${fluid.calc(37.53, 118.81, 's', 'px')};
  --header-p-mt: ${fluid.calc(32, 40, 's', 'px')};
  --header-p-mb: ${fluid.calc(32, 40, 's', 'px')};
  --header-p-ls: 0.09px;
  --cta-btn-mb: 55.68px;
  --hero-mt: 83.32px;
  --hero-img-w: 100%;

  --curve2-margin: 40px 0 37px;
  --article-p-fs: 18px;
  --article-p-lh: 32px;
  --article-mt: 0;
  --article-mb: 64px;

  --section-width: ${fluid.calc(375, 689, 's', 'px')};
  --section-height: ${fluid.calc(749, 684, 's', 'px')};
  --section-left: ${fluid.calc(0, 39, 's', 'px')};
  --section-bottom: ${fluid.calc(286, 176, 's', 'px')};

  --footer-pt: ${fluid.calc(190, 536, 's', 'px')};
  --footer-mt: ${fluid.calc(851, 493, 's', 'px')};
  --jeremy-w: 100%;
  --jeremy-h: 221px;
}


@media (min-width: 768px) {
  :root{
    --container-padding: 0 ${fluid.calc(39, 165, 'b', 'px')};

    --h1-fs: ${fluid.calc(56, 72, 'b', 'px')};
    --h1-lh: ${fluid.calc(64, 78, 'b', 'px')};
    --h1-ls: ${fluid.calc(-0.78, -1, 'b', 'px')};
    --h2-fs: ${fluid.calc(40, 48, 'b', 'px')};
    --h2-lh: ${fluid.calc(48, 56, 'b', 'px')};
    --h2-ls: ${fluid.calc(-0.42, -.05, 'b', 'px')};
    --body-fs: ${fluid.calc(16, 18, 'b', 'px')};
    --body-lh:  ${fluid.calc(28, 32, 'b', 'px')};
    --body-ls: ${fluid.calc(0.9, 0.1, 'b', 'px')};

    --header-mt: ${fluid.calc(40, 50, 'b', 'px')};
    --header-mb: ${fluid.calc(80, 67, 'b', 'px')};
    --header-btn-w: 219px;
    --header-btn-h: 56px;
    --header-btn-fs: 16px;
    --header-btn-lh: 32px;
    --header-btn-ls: -0.16px;
    --header-curve1-w: ${fluid.calc(231.19, 287, 'b', 'px')};
    --header-curve1-h: ${fluid.calc(29, 36, 'b', 'px')};
    --header-curve1-t: ${fluid.calc(-45.32, -53.32, 'b', 'px')};
    --header-curve1-r: ${fluid.calc(118.81, 59, 'b', 'px')};
    --header-p-mt: 40px;
    --header-p-mb: ${fluid.calc(40, 53, 'b', 'px')};
    --header-p-ls: ${fluid.calc(0.09, 0.1, 'b', 'px')};
    --cta-btn-mb: 0;
    --hero-mt: ${fluid.calc(168, 170, 'b', 'px')};
    --hero-img-w: ${fluid.calc(281, 350, 'b', 'px')};
    --hero-img-t: ${fluid.calc(-88, -103, 'b', 'px')};

    --article-p-fs: ${fluid.calc(18, 20, 'b', 'px')};
    --article-p-lh: ${fluid.calc(32, 35, 'b', 'px')};
    
    --section-width: ${fluid.calc(689, 1109, 'b', 'px')};
    --section-height: ${fluid.calc(684, 545, 'b', 'px')};
    --section-left: ${fluid.calc(39, 167, 'b', 'px')};
    --section-bottom: ${fluid.calc(176, 199, 'b', 'px')};

    --footer-pt: ${fluid.calc(536, 360, 'b', 'px')};
    --footer-mt: ${fluid.calc(493, 571, 'b', 'px')};


  }
}

@media (min-width: 860px) {
    :root {
        --curve2-margin: 0 ${fluid.calc(10, 52.57, 'b', 'px')} ${fluid.calc(390, 331.85, 'b', 'px')} 30.2px;
        --article-mt: 0;
        --article-mb: 0;
        --jeremy-w: 375px;
        --jeremy-h: 500px;
        --section-height: ${fluid.calc(530, 545, 'b', 'px')};
    }
}

@media (min-width: 1440px) {
    :root {
        --container-padding: ${fluid.container(16, 165, 16)};
    }

}

* {box-sizing: border-box;}

html {
  font-family: 'Epilogue', sans-serif;
  color: var(--grey);
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--white);
}

a {
    text-decoration: none;
    color: #337ab7;
}

a:hover, a:focus {text-decoration: underline;}

abbr:hover , acronym:hover { cursor: help;}

kbd {
    background-color: #333333;
    color: #ffffff;
    font-size: .9em;
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
}

code {
    color: #c7254e;
    background-color: #f9f2f4;
    font-size: .9em;
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
}

sub, sup {
    font-size: 75%;
}

blockquote {
    padding: 0.5em 1.5em;
    margin-left: 0;
    margin-right: 0;
    /* font-size: var(--fluid-h4); */
    border-left: 5px solid #eee;
}

blockquote > p {
    margin: 0;
}

dt {font-weight: 700;}
dd {margin-inline-start: 0;}
address {font-style: normal;}

pre {
    display: block;
    padding: 1.5em;
    /* font-size: var(--fluid-sm); */
    line-height: 1.6em;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: .3em;
}

fieldset {
    padding: 0;
    margin: 0;
    border: 0;
}

legend {
    width: 100%;
    /* font-size: var(--fluid-h3); */
    border-bottom: solid 1px #d6d6d6;
    margin-bottom: 1em;
}

label {
    font-weight: 700;
}

button:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover {
    cursor: pointer;
}
`;

export default GlobalStyle;