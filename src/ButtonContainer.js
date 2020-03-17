/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function ButtonContainer(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    min-width: 500px;
    min-height: 400px;

    flex-basis: 49%;
    flex-grow: 2;

    background-color: ${props.content.backgroundColor};

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .title-container {
      ${'' /* border: 1px solid green; */}

      height: 24%;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }

    h2, h3 {
      ${'' /* border: 1px solid red; */}

      @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
      font-family: 'Lato', sans-serif;

      font-size: 28px;
      font-weight: 600;

      margin: 0;
      padding: 0;
    }

    h3 {
      font-size: 18px;
    }

    .smaller-container {
      ${'' /* border: 1px solid blue; */}

      ${'' /* height: 55%; */}
      min-height: 55%;
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  `;

  return (
    <div css={styling}>
      <div className="title-container">
        <h2>{props.content.title}</h2>
        <h3>{props.content.subtitle}</h3>
      </div>
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
