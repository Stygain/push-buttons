/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import NavBar from './NavBar.js';
import Menu from './Menu.js';
import Footer from './Footer.js';
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

import RotateHoriz from './Buttons/Progress/RotateHoriz.js';
import SlideHorizUp from './Buttons/Progress/SlideHorizUp.js';
import SlideHorizDown from './Buttons/Progress/SlideHorizDown.js';
import ShrinkHoriz from './Buttons/Progress/ShrinkHoriz.js';
import RotateHorizFull from './Buttons/Progress/RotateHorizFull.js';


const PageStructure = [
  {
    title: "Fill-on-Hover Buttons",
    subtitle: "Hover over each button to see an action",
    backgroundColor: "rgb(199, 188, 254)",
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
    subtitle: "Click each button to see an action",
    backgroundColor: "rgb(144, 218, 211)",
    buttons: [
      <Tactile />,
      <TactileToggle />,
      <TactileCircle />,
    ]
  },
  {
    title: "Sliders/Switches",
    subtitle: "Click on each slider to see an action",
    backgroundColor: "rgb(144, 191, 218)",
    buttons: [
      <SliderRound />,
      <SliderRoundOnOff />,
      <SliderWiden />,
    ]
  },
  {
    title: "Loading Buttons",
    subtitle: "Click on each loading button to see an action",
    backgroundColor: "rgb(249, 178, 174)",
    buttons: [
      <SlideHorizDown />,
      <SlideHorizUp />,
      <ShrinkHoriz />,
      <RotateHoriz />,
      <RotateHorizFull />,
    ]
  }
]

function App() {
  const [clicked, setClicked] = useState(false);

  const styling = css`
    ${'' /* border: 1px solid red; */}

    .master-container {
      padding-top: 50px;
      background-color: rgb(199, 188, 254);
      ${'' /* border: 3px solid black; */}

      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  `;

  return (
    <div className="App" css={styling}>
      <NavBar click={clicked} clickhandler={setClicked} />
      <Menu click={clicked} />
      <div className="master-container">
        {
          PageStructure.map((item) => {
            return (<ButtonContainer content={item} />);
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
