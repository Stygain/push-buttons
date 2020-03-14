/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';


function HoverFill(props) {
  const [ clicked, setClicked ] = useState(false);

  const styling = css`
    ${'' /* border: 1px solid red; */}

    flex-basis: 33%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      padding: 8px 15px;
      margin: 25px 50px;

      cursor: pointer;

      text-transform: uppercase;
      font-size: 22px;
      font-weight: 700;
      user-select: none;
      color: rgb(255, 255, 255);

      border: none;
      border-radius: 3px;
      background: rgb(110, 185, 178);
      box-shadow: 0 5px 0px rgba(0, 0, 0, 0.60);

      transform: translateY(-4px);
    }

    button.clicked {
      background: rgb(106, 177, 171);
      box-shadow: 0 1px 0px rgba(0, 0, 0, 0.60);
      transform: translateY(0px);
    }
  `;

  return (
    <div css={styling}>
      <button className={clicked ? "clicked" : ""}
        onClick={
          () => {
            setClicked(!clicked)
          }
        }>
        Toggle
      </button>
  	</div>
  );
}

export default HoverFill;
