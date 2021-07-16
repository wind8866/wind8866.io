import babel from './react-loader.mjs';
import React from './react.mjs';

const element = babel(`
  <div id="foo">
    <a>bar</a>
    <b></b>
  </div>
`);
const container = document.querySelector('#root');
React.render(element, container);
