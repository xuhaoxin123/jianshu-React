import React, { Component } from 'react';
import Header from './common/header';

import {GlobalStyle} from "./style";
import {GlobalStyleIcon} from "./statics/iconfont/iconfont";
class App extends Component {
  render() {
    return (
      <div className="App">
      
      <GlobalStyle/>
      <GlobalStyleIcon/>
          <Header/>
      </div>
    );
  }
}

export default App;
