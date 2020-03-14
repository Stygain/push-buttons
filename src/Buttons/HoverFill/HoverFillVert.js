/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function HoverFillVert(props) {
  const styling = css`
    ${'' /* border: 1px solid red; */}

    flex-basis: 33%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      outline: none;

      display: block;
      padding: 8px 15px;
      margin: 25px 50px;

      position: relative;

      text-align: center;
      text-transform: uppercase;
      user-select: none;
      font-weight: 700;
      font-size: 22px;
      color: rgb(255, 255, 255);

      border: 3px solid rgb(255, 255, 255);
      background-color: rgba(6, 66, 111, 0);
      overflow: hidden;

      cursor: pointer;

      transition: color 0.3s ease-in-out;

      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);
    }

    button span {
      position: relative;
      z-index: 1;
    }

    button:after {
      content: "";

      position: absolute;
      left: 0;
      bottom: 0;
      height: 0%;
      width: 100%;

      background: rgb(255, 255, 255);

      transition: all .3s ease-in-out;
    }

    button:hover {
      color: rgb(143, 130, 205);
    }

    button:hover:after {
      height: 100%;
    }
  `;

  return (
    <div css={styling}>
      <button>
        <span>
          Button
        </span>
      </button>
  	</div>
  );
}

export default HoverFillVert;
