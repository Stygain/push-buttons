/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function HoverFill(props) {
  const styling = css`
    ${'' /* border: 1px solid red; */}

    button {
      padding: 8px 15px;
      margin: 25px 50px;

      cursor: pointer;

      text-transform: uppercase;
      font-size: 22px;
      font-weight: 700;
      user-select: none;
      color: rgb(255, 255, 255);

      border: 3px solid rgb(255, 255, 255);
      background: rgba(255, 255, 255, 0);
      background: ${props.bgColor};
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);

      transition: background 0.3s ease,
                  color 0.3s ease;
    }

    button:hover {
      background: rgba(255, 255, 255, 1);
      color: rgb(0, 0, 0);
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
