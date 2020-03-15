/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';


function SliderWiden(props) {
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
      width: 80px;
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

      background-color: rgb(208, 208, 208);
      box-shadow: 0px 0px 4px rgb(150, 150, 150);

      transition: 0.4s ease-in-out;
    }

    .slider::before {
      content: "";

      position: absolute;
      top: 4px;
      bottom: 4px;
      left: 4px;
      right: 50px;
      border-radius: 36px;

      background-color: rgb(255, 255, 255);
      box-shadow: 0px 0px 4px rgb(167, 167, 167);

      transition: 0.4s cubic-bezier(.64,-0.21,.45,1.4);
    }

    .slider:hover {
      &::before {
        top: 4px;
        bottom: 4px;
        right: ${clicked ? "4px" : "40px"};
        left: 4px;
      }
    }

    input:checked + .slider:hover {
      &::before {
        top: 4px;
        bottom: 4px;
        right: 4px;
        left: ${clicked ? "4px" : "40px"};
      }
    }

    input:checked + .slider::before {
      left: ${clicked ? "4px" : "50px"};
      right: 4px;
    }

    .slider.active::before {
      top: 4px;
      bottom: 4px;
      left: 4px;
      right: 4px;
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
        onMouseLeave={
          () => {
            setClicked(false)
          }
        }
        onMouseUp={
          () => {
            setClicked(false)
          }
        }>
        <input type="checkbox" />
        <span class={clicked ? "slider active" : "slider"}></span>
      </label>
  	</div>
  );
}

export default SliderWiden;
