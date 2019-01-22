import React, { Component } from "react";
import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import { GlobalStyleIcon } from "./statics/iconfont/iconfont";
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <div>
          <GlobalStyle />
          <GlobalStyleIcon />
          <BrowserRouter>
             <div>
               <Header />
               <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
      			<Route path='/detail/:id' exact component={Detail}></Route>
             </div>
          </BrowserRouter>
        </div>
        </Provider>
      </div>
    );
  }
}

export default App;
