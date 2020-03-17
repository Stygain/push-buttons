/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useDispatch } from 'react-redux';
import { randomizeMenuColor } from './redux/actions.js';


function HamburgerX(props) {
  const dispatch = useDispatch();

  const styling = css`
    position: ${props.click ? "fixed" : "absolute"};

    top: 0px;
    left: 0px;
    margin-top: 10px;
    margin-left: 9px;
    width: 35px;
    height: 24px;
    padding: 2px;
    z-index: 3;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    div {
      width: 35px;
      height: 4px;
      background-color: rgba(179, 203, 197, 1);
      transition: 0.3s cubic-bezier(.69,-0.36,.32,1.35);
    }

    div:nth-child(1).change {
      transform: translateY(10px) scale(1) rotate(-135deg);
      background-color: rgb(57, 57, 57);
    }

    div:nth-child(2).change {
      opacity: 0;
    }

    div:nth-child(3).change {
      transform: translateY(-10px) scale(1) rotate(135deg);
      background-color: rgb(57, 57, 57);
    }
  `;

  return (
    <div css={styling} id="button" onClick={
        () => {
          props.clickhandler(!props.click)
          if (!props.click) {
            dispatch(randomizeMenuColor());
          }
        }
      }>
  	  <div className={props.click === true ? "change" : ""}></div>
  	  <div className={props.click === true ? "change" : ""}></div>
  	  <div className={props.click === true ? "change" : ""}></div>
  	</div>
  );
}

export default HamburgerX;
