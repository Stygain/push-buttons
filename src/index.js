/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store.js';

import * as serviceWorker from './serviceWorker';

import App from './App';


const globalStyles = css`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    font-family: 'Lato', sans-serif;

    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    color: rgb(255, 255, 255);
  }
`;

ReactDOM.render(
  <div>
    <Global styles={globalStyles} />
    <Provider store={store}>
      <App />
    </Provider>
  </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
