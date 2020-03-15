/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import HamburgerX from './HamburgerX.js';
import Menu from './Menu.js';
import ButtonContainer from './ButtonContainer.js';

import HoverFill from './Buttons/HoverFill/HoverFill.js';
import HoverFillVert from './Buttons/HoverFill/HoverFillVert.js';
import HoverFillDiag from './Buttons/HoverFill/HoverFillDiag.js';
import HoverFillPartialHoriz from './Buttons/HoverFill/HoverFillPartialHoriz.js';
import HoverFillRotateIn from './Buttons/HoverFill/HoverFillRotateIn.js';

import Tactile from './Buttons/Tactile/Tactile.js';
import TactileToggle from './Buttons/Tactile/TactileToggle.js';
import TactileCircle from './Buttons/Tactile/TactileCircle.js';

import SliderRound from './Buttons/Sliders/SliderRound.js';
import SliderRoundOnOff from './Buttons/Sliders/SliderRoundOnOff.js';
import SliderWiden from './Buttons/Sliders/SliderWiden.js';


const PageStructure = [
  {
    title: "Fill-on-Hover Buttons",
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
    title: "Tactile Buttons",
    backgroundColor: "rgb(144, 218, 211)",
    buttons: [
      <Tactile />,
      <TactileToggle />,
      <TactileCircle />,
    ]
  },
  {
    title: "Sliders/Switches",
    backgroundColor: "rgb(144, 191, 218)",
    buttons: [
      <SliderRound />,
      <SliderRoundOnOff />,
      <SliderWiden />,
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
