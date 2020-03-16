/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';


function RotateHoriz(props) {
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

      width: 100%;
      height: 100%;

      text-transform: uppercase;
      font-size: 20px;
      font-weight: 700;
      user-select: none;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background: rgb(36, 185, 12);

      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);

      ${'' /* transform: rotateX(0deg) translate3d(0px, 0px, 20px); */}
    }

    .loader {
      ${'' /* border: 1px solid red; */}

      position: absolute;

      width: 100%;
      top: 0;
      left: 0;
      height: 15px;

      background: rgb(27, 148, 8);
      transform: rotateX(-90deg) translate3d(0px, 7.5px, 42.5px);

      transition: 0.3s ease;
    }

    .loader-2 {
      ${'' /* border: 1px solid red; */}

      position: absolute;

      width: ${loaderWidth};
      top: 0;
      left: 0;
      height: 15px;

      background: rgb(19, 111, 5);
      transform: rotateX(-90deg) translate3d(0px, 7.5px, 42.5px);

      transition: 0.3s ease;
    }

    .content-wrapper.loading {
      ${'' /* transform: rotateX(40deg); */}
      transform: rotate3d(1, 0, 0, 40deg);
      cursor: default;
    }
  `;

  useEffect(() => {
    if (clicked) {
      async function updateLoaderWidth() {
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("10%");
        await new Promise(r => setTimeout(r, 850));
        setLoaderWidth("20%");
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("50%");
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("60%");
        await new Promise(r => setTimeout(r, 650));
        setLoaderWidth("75%");
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("100%");
        await new Promise(r => setTimeout(r, 500));
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
        <div className="loader"></div>
        <div className="loader-2"></div>
      </div>
  	</div>
  );
}

export default RotateHoriz;
