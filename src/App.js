import React, { Component } from "react";
import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import { GlobalStyleIcon } from "./statics/iconfont/iconfont";
import Home from './pages/home';
import detail from './pages/detail';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <div>
          <GlobalStyle />
          <GlobalStyleIcon />
          <Header />
          <BrowserRouter>
             <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={detail}></Route>
             </div>
          </BrowserRouter>
        </div>
        </Provider>
      </div>
    );
  }
}

export default App;
