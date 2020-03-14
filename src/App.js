/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

import HamburgerX from './HamburgerX.js';
import Menu from './Menu.js';


function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <HamburgerX click={clicked} clickhandler={setClicked}/>
      <Menu click={clicked} />
    </div>
  );
}

export default App;
