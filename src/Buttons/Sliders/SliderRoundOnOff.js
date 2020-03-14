/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';


function SliderRoundOnOff(props) {
  const [ clicked, setClicked ] = useState(false);

  const styling = css`
    ${'' /* border: 1px solid red; */}

    flex-basis: 33%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .switch {
      ${'' /* border: 1px solid red; */}

      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;

      transition: 0.2s ease-in-out;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .switch.clicked {
      transform: scale(0.95);
    }

    .slider {
      ${'' /* border: 1px solid blue; */}

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 34px;

      cursor: pointer;

      background-color: rgb(255, 120, 120);
      box-shadow: 0px 0px 4px rgb(150, 150, 150);

      transition: 0.4s ease-in-out;
    }

    .slider:before {
      content: "";

      position: absolute;
      left: 4px;
      bottom: 4px;
      width: 26px;
      height: 26px;
      border-radius: 100%;

      background-color: rgb(255, 255, 255);
      box-shadow: 0px 0px 4px rgb(167, 167, 167);

      transition: 0.4s cubic-bezier(.64,-0.21,.45,1.4);
    }

    input:checked + .slider {
      background-color: rgb(42, 223, 77);
    }

    input:checked + .slider:before {
      width: 10px;
      border-radius: 3px;

      transform: translateX(36px);
    }

    input:checked + .slider {
      ${'' /* box-shadow: 0 0 2px rgb(33, 150, 244); */}
    }
  `;

  return (
    <div css={styling}>
      <label className={clicked ? "switch clicked" : "switch"}
        onMouseDown={
          () => {
            setClicked(true)
          }
        }
        onMouseUp={
          () => {
            setClicked(false)
          }
        }>
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
  	</div>
  );
}

export default SliderRoundOnOff;
