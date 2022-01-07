import Post from './Post';
import './styles/styles.css';
import WebpackLogo from './assets/webpack-logo.png';

import React from 'react';
import { render } from 'react-dom';

const post = new Post('Webpack Post Titile', WebpackLogo)
console.log('Post to String:', post.toString())

const App = () => {
  return (
    <div className="container">
      <h1>Webpack Course</h1>
      <hr/>
      <div className="logo"></div>
    </div>  
  );
};

render(<App />, document.getElementById('app'));