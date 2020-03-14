/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import HamburgerX from './HamburgerX.js';
import Menu from './Menu.js';
import ButtonContainer from './ButtonContainer.js';

import HoverFill from './Buttons/HoverFill.js';
import HoverFillVert from './Buttons/HoverFillVert.js';
import HoverFillDiag from './Buttons/HoverFillDiag.js';
import HoverFillPartialHoriz from './Buttons/HoverFillPartialHoriz.js';
import HoverFillRotateIn from './Buttons/HoverFillRotateIn.js';


const PageStructure = [
  {
    backgroundColor: "rgb(133, 109, 252)",
    buttons: [
      <HoverFill />,
      <HoverFillVert />,
      <HoverFillDiag />,
      <HoverFillPartialHoriz />,
      <HoverFillRotateIn />,
    ]
  },
  {
    backgroundColor: "rgb(144, 218, 211)",
    buttons: [
      <HoverFill />,
      <HoverFillVert />,
      <HoverFill />,
      <HoverFill />,
      <HoverFill />,
    ]
  },
  {
    backgroundColor: "rgb(144, 191, 218)",
    buttons: [
      <HoverFill />,
      <HoverFillVert />,
      <HoverFill />,
      <HoverFill />,
      <HoverFill />,
    ]
  },
  {
    backgroundColor: "rgb(221, 190, 245)",
    buttons: [
      <HoverFill />,
      <HoverFillVert />,
      <HoverFill />,
      <HoverFill />,
      <HoverFill />,
    ]
  }
]

function App() {
  const [clicked, setClicked] = useState(false);

  const styling = css`
    ${'' /* border: 1px solid red; */}

    .master-container {
      ${'' /* border: 3px solid black; */}

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
        {
          PageStructure.map((item) => {
            return (<ButtonContainer content={item} />);
          })
        }
      </div>
    </div>
  );
}

export default App;
