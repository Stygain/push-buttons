/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';


function RotateHorizFull(props) {
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

      margin: 25px 50px;

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

      width: 100%;
      height: 100%;

      text-transform: uppercase;
      font-size: 22px;
      font-weight: 700;
      user-select: none;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      color: rgb(255, 255, 255);

      background: rgb(250, 96, 91);

      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);

      ${'' /* transform: rotateX(0deg) translate3d(0px, 0px, 20px); */}
    }

    .loader-bg {
      ${'' /* border: 1px solid red; */}

      position: absolute;

      width: 100%;
      top: 0;
      left: 0;
      height: 15px;

      background: rgb(227, 56, 50);
      transform: rotateX(-90deg) translate3d(0px, 7.5px, 42.5px);

      transition: 0.3s ease;
    }

    .loader {
      ${'' /* border: 1px solid red; */}

      position: absolute;

      width: ${loaderWidth};
      top: 0;
      left: 0;
      height: 15px;

      background: rgb(164, 44, 39);
      transform: rotateX(-90deg) translate3d(0px, 7.5px, 42.5px);

      transition: 0.3s ease;
    }

    .content-wrapper.loading {
      ${'' /* transform: rotateX(40deg); */}
      transform: rotate3d(1, 0, 0, 90deg);
      cursor: default;
    }
  `;

  useEffect(() => {
    if (clicked) {
      async function updateLoaderWidth() {
        await new Promise(r => setTimeout(r, 400));
        setLoaderWidth("13%");
        await new Promise(r => setTimeout(r, 550));
        setLoaderWidth("36%");
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("45%");
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("60%");
        await new Promise(r => setTimeout(r, 850));
        setLoaderWidth("87%");
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("100%");
        await new Promise(r => setTimeout(r, 400));
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
          Button
        </div>
        <div className="loader-bg"></div>
        <div className="loader"></div>
      </div>
  	</div>
  );
}

export default RotateHorizFull;
