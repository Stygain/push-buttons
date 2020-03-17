/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useSelector } from 'react-redux';
import { getCurrMenuColor } from './redux/selectors.js';


function Menu(props) {
  const currMenuColor = useSelector(getCurrMenuColor);

  const styling = css`
    @import url('https://fonts.googleapis.com/css?family=Spartan&display=swap');
    font-family: 'Spartan', sans-serif;

    position: fixed;
    z-index: 15;
    opacity: 0%;
    background-color: ${currMenuColor};
    text-align: center;
    margin: 0;

    top: -100%;
    left: -100%;
    width: 100%;
    height: 100%;

    border-radius: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    transition: 0.8s ease-in-out 0.2s;

    &.open {
      opacity: 100%;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      transition: 0.8s ease-in-out;
    }

    .menu {
      ${'' /* border: 1px solid red; */}

      min-width: 50%;
      height: 50%;
      margin-bottom: 200%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      transition: 0.8s ease-in-out 0s;
    }

    .menu.open {
      margin-bottom: 0;

      transition: 0.8s ease-in-out 0.3s;
    }

    .item {
      ${'' /* border: 1px solid blue; */}

      font-size: 26px;
      white-space: nowrap;
      overflow: hidden;
      width: 0px;

      margin: 10px;
    }

    .item.link {
      font-size: 38px;
      font-weight: 600;
    }

    .menu.open .item {
      width: 100%;
    }

    .menu .item {
      transition: 0.5s ease-in-out 0s;
    }

    .menu.open .item:nth-child(1) {
      transition: 0.8s ease-in-out 0.6s;
    }

    .menu.open .item:nth-child(2) {
      transition: 0.8s ease-in-out 1s;
    }

    .menu.open .item:nth-child(3) {
      transition: 0.8s ease-in-out 1.4s;
    }

    .item:nth-child(1) {
      margin-top: 20px;
      margin-bottom: 20px;
      padding-bottom: 3px;
      border-bottom: 3px solid black;
    }

    a {
      text-decoration: none;
      position: relative;
      display: inline-block;
      ${'' /* font-size: 20px; */}
      ${'' /* font-weight: 300; */}
      color: rgb(108, 108, 108);
      transition: color .4s ease;
      padding: 6px 0;
      margin-bottom: 7px;

      &:hover {
        color: rgb(0, 0, 0);

        &::after,
        &::before {
          width: 100%;
          left: 0;
        }

      }

      &::after,
      &::before {
        content: '';
        position: absolute;
        top: calc(85%);
        width: 0;
        right: 0;
        height: 6px;
      }

      &::before {
        transition: width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
        background: rgb(136, 136, 136);
      }

      &::after {
        transition: width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
        background: rgb(0, 0, 0);
      }
    }
  `;

  return (
    <div css={styling} className={props.click === true ? "open" : ""}>
      <div className={props.click === true ? "menu open" : "menu"}>
        <div className="item">
          Adam Barton
        </div>
        <div className="item link">
          <a href="https://github.com/Stygain">
            Github
          </a>
        </div>
        <div className="item link">
          <a href="https://stygain.github.io/northwestvision/">
            Photography
          </a>
        </div>
      </div>
  	</div>

  );
}

export default Menu;
