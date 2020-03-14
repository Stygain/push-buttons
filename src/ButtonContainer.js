/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function ButtonContainer(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    min-width: 500px;
    height: 400px;

    flex-basis: 49%;
    flex-grow: 2;

    background-color: ${props.content.backgroundColor};

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2 {
      ${'' /* border: 1px solid red; */}

      @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
      font-family: 'Lato', sans-serif;

      font-size: 28px;
      font-weight: 600;

      margin: 0;
    }

    .smaller-container {
      ${'' /* border: 1px solid blue; */}

      height: 55%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    @media (max-height: 800px) {
      .smaller-container {
        height: 75%;
      }
    }
  `;

  return (
    <div css={styling}>
      <h2>{props.content.title}</h2>
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
