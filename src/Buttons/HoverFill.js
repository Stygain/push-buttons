/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function HoverFill(props) {
  const styling = css`
    ${'' /* border: 1px solid red; */}

    button {
      padding: 5px 10px;
      margin: 0px 15px;

      cursor: pointer;

      text-transform: uppercase;
      font-size: 24px;
      user-select: none;

      border: 2px solid rgb(255, 255, 255);
      background: rgba(255, 255, 255, 0);

      transition: background 0.3s ease;
    }

    button:hover {
      background: rgba(255, 255, 255, 1);
    }
  `;

  return (
    <div css={styling}>
      <button>
        Button
      </button>
  	</div>
  );
}

export default HoverFill;
