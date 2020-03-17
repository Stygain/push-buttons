/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';


function ShrinkHoriz(props) {
  const [ clicked, setClicked ] = useState(false);
  const [ loaderWidth, setLoaderWidth ] = useState("0px");

  const styling = css`
    ${'' /* border: 1px solid red; */}

    flex-basis: 33%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    perspective: 800px;

    .content-wrapper {
      ${'' /* border: 1px solid blue; */}

      position: relative;

      width: 130px;
      height: 50px;

      cursor: pointer;

      transform-origin: 50% 50%;
      transform-style: preserve-3d;

      transition: 0.4s all;
    }

    .content {
      ${'' /* border: 1px solid blue; */}

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      color: rgb(255, 255, 255);

      background: rgb(250, 96, 91);

      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);

      transition: 0.3s ease;
    }

    .content p {
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 700;
      user-select: none;

      transition: 0.1s ease;
    }

    .loader-bg {
      position: absolute;
      top: calc(50% - 7.5px);
      left: 0;
      width: 100%;
      height: 15px;

      opacity: 0%;

      background: rgb(227, 56, 50);

      transition: 0.3s ease,
                  opacity 0.15s ease;
    }

    .loader {
      position: absolute;
      top: calc(50% - 7.5px);
      left: 0;
      width: ${loaderWidth};
      height: 15px;

      opacity: 0%;

      background: rgb(164, 44, 39);

      transition: 0.3s ease,
                  opacity 0.15s ease;
    }

    .content-wrapper.loading .content {
      top: calc(50% - 7.5px);

      height: 15px;

      overflow: hidden;
    }

    .content-wrapper.loading .content p {
      opacity: 0%;
    }

    .loader-bg.loading {
      opacity: 100%;

      transition: 0.3s ease,
                  opacity 0.2s ease 0.1s;
    }

    .loader.loading {
      opacity: 100%;

      transition: 0.3s ease,
                  opacity 0.2s ease 0.1s;
    }
  `;

  useEffect(() => {
    if (clicked) {
      async function updateLoaderWidth() {
        await new Promise(r => setTimeout(r, 600));
        setLoaderWidth("15%");
        await new Promise(r => setTimeout(r, 700));
        setLoaderWidth("20%");
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("35%");
        await new Promise(r => setTimeout(r, 400));
        setLoaderWidth("45%");
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("80%");
        await new Promise(r => setTimeout(r, 600));
        setLoaderWidth("100%");
        await new Promise(r => setTimeout(r, 550));
        setClicked(false);
        await new Promise(r => setTimeout(r, 100));
        setLoaderWidth("0%");
      }
      updateLoaderWidth();
    }
  }, [clicked]);

  return (
    <div css={styling}>
      <div className={clicked ? "content-wrapper loading" : "content-wrapper"}
        onClick={
          () => {
            setClicked(true);
          }
        }>
        <div className="content">
          <p>Button</p>
        </div>
        <div className={clicked ? "loader-bg loading" : "loader-bg"}></div>
        <div className={clicked ? "loader loading" : "loader"}></div>
      </div>
  	</div>
  );
}

export default ShrinkHoriz;
