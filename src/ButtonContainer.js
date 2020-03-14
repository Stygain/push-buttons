/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function ButtonContainer(props) {
  const styling = css`
    border: 1px solid green;

    min-width: 450px;
    height: 400px;

    flex-basis: 49%;
    flex-grow: 2;

    background-color: rgb(133, 109, 252);
  `;

  return (
    <div css={styling}>
      <p>heres some content?</p>
  	</div>
  );
}

export default ButtonContainer;
