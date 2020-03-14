/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function SliderRound(props) {
  const styling = css`
    ${'' /* border: 1px solid red; */}

    flex-basis: 33%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      cursor: pointer;

      background-color: rgb(204, 204, 204);

      transition: 0.4s ease-in-out;
    }

    .slider:before {
      content: "";

      position: absolute;
      left: 4px;
      bottom: 4px;
      width: 26px;
      height: 26px;

      background-color: rgb(255, 255, 255);

      transition: 0.4s ease-in-out;
    }

    input:checked + .slider {
      background-color: rgb(33, 150, 244);
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }

    input:focus + .slider {
      box-shadow: 0 0 2px rgb(33, 150, 244);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 100%;
    }
  `;

  return (
    <div css={styling}>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
  	</div>
  );
}

export default SliderRound;
