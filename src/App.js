/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import HamburgerX from './HamburgerX.js';
import Menu from './Menu.js';
import ButtonContainer from './ButtonContainer.js';


function App() {
  const [clicked, setClicked] = useState(false);

  const styling = css`
    border: 1px solid red;

    .master-container {
      border: 3px solid black;

      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  `;

  return (
    <div className="App" css={styling}>
      <HamburgerX click={clicked} clickhandler={setClicked} />
      <Menu click={clicked} />
      <div className="master-container">
        <ButtonContainer color="rgb(133, 109, 252)" />
        <ButtonContainer color="rgb(144, 218, 211)" />
        <ButtonContainer color="rgb(252, 237, 157)" />
        <ButtonContainer color="rgb(252, 174, 110)" />
      </div>
    </div>
  );
}

export default App;
