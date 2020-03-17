/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';


function SlideHorizUp(props) {
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

      width: 130px;
      height: 50px;

      cursor: pointer;

      transform-origin: 50% 50%;
      transform-style: preserve-3d;

      transition: 0.4s all;
    }

    .content {
      ${'' /* border: 1px solid blue; */}

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

      background: rgb(14, 196, 125);

      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);

      transition: 0.3s ease;
    }

    .loader-container {
      ${'' /* border: 1px solid red; */}

      position: relative;

      transition: 0.3s ease;
    }

    .loader-bg {
      ${'' /* border: 1px solid red; */}

      position: absolute;

      width: 100%;
      top: 0;
      left: 0;
      height: 0;

      background: rgb(14, 168, 109);

      transition: 0.3s ease;
    }

    .loader {
      ${'' /* border: 1px solid red; */}

      position: absolute;

      width: ${loaderWidth};
      top: 0;
      left: 0;
      height: 0;

      background: rgb(10, 139, 89);

      transition: 0.3s ease;
    }

    .loader-bg.loading, .loader.loading {
      height: 10px;
    }

    .content-wrapper.loading {
      cursor: default;
    }

    .content-wrapper.loading .content {
      transform: translateY(-10px);
    }

    .content-wrapper.loading .loader-container {
      transform: translateY(-10px);
    }
  `;

  useEffect(() => {
    if (clicked) {
      async function updateLoaderWidth() {
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("5%");
        await new Promise(r => setTimeout(r, 850));
        setLoaderWidth("20%");
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("30%");
        await new Promise(r => setTimeout(r, 750));
        setLoaderWidth("40%");
        await new Promise(r => setTimeout(r, 650));
        setLoaderWidth("65%");
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
        <div className="loader-container">
          <div className={clicked ? "loader-bg loading" : "loader-bg"}></div>
          <div className={clicked ? "loader loading" : "loader"}></div>
        </div>
      </div>
  	</div>
  );
}

export default SlideHorizUp;
