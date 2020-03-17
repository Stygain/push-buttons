/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';

import HamburgerX from './HamburgerX.js';


function NavBar(props) {
  const [ prevScrollPos, setPrevScrollPos ] = useState(null);
  const [ showNavBar, setShowNavBar ] = useState(true);

  const styling = css`
    ${'' /* border: 1px solid green; */}

    position: relative;

    padding: 15px 5px;
    background-color: rgb(52, 52, 52);
    box-shadow: 0px 3px 5px 0px rgba(52, 52, 52, 0.52);
    z-index: 20;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;

    position: fixed;
    top: 0;
    width: 100%;

    transition: top 0.3s;

    &.hide {
      top: -77px;
    }

    .arrow-container {
      position: absolute;
      top: 13px;
      right: 25px;

      z-index: 5;
    }

    .title {
      margin-left: 10px;

      color: rgba(179, 203, 197, 1);
    }
  `;

  useEffect(() => {
    const handleScroll = () => {
      if (props.click) {
        setShowNavBar(false);
        return;
      }
      var currentScrollPos = window.pageYOffset;
      // console.log(currentScrollPos);
      if (prevScrollPos === null) {
        setPrevScrollPos(currentScrollPos);
      } else {
        if (prevScrollPos > currentScrollPos) {
          setShowNavBar(true);
        } else {
          setShowNavBar(false);
        }
        setPrevScrollPos(currentScrollPos);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return(() => window.removeEventListener("scroll", handleScroll));
  }, [props.click, prevScrollPos])

  return (
    <div css={styling} className={showNavBar && props.click === false ? "navbar" : "navbar hide"}>
      <HamburgerX click={props.click} clickhandler={props.clickhandler} />
      <h1 className="title">Adam Barton</h1>
    </div>
  );
}


export default NavBar;
