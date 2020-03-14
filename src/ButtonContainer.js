/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import HoverFill from './Buttons/HoverFill.js';


function ButtonContainer(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    min-width: 500px;
    height: 400px;

    flex-basis: 49%;
    flex-grow: 2;

    background-color: ${props.content.backgroundColor};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .smaller-container {
      ${'' /* border: 1px solid blue; */}

      height: 30%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  `;

  return (
    <div css={styling}>
      <div className="smaller-container">
        {
          props.content.buttons.map((button) => {
            return (button);
          })
        }
      </div>
  	</div>
  );
}

export default ButtonContainer;
