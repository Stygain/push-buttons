/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useDispatch } from 'react-redux';
import { randomizeMenuColor } from './redux/actions.js';


function HamburgerX(props) {
  const dispatch = useDispatch();

  const styling = css`
    position: absolute;

    top: 20px;
    left: 20px;
    width: 35px;
    height: 30px;
    padding: 8px;
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
      height: 6px;
      background-color: #000;
      transition: 0.3s cubic-bezier(.69,-0.36,.32,1.35);
    }

    div:nth-child(1).change {
      transform: translateY(12px) scale(1.2) rotate(-135deg);
      background-color: rgb(117, 117, 117);
    }

    div:nth-child(2).change {
      opacity: 0;
    }

    div:nth-child(3).change {
      transform: translateY(-12px) scale(1.2) rotate(135deg);
      background-color: rgb(117, 117, 117);
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
