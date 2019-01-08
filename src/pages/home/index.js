import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {HomeWrapper ,HomeLeft ,HomeRight } from './style';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                   <HomeWrapper>
                        <HomeLeft>
                                <img alt="" className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4596/1686f2fe090d3a75481c6fad69aba5396f82d260.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>

                        <Topic/>
                        <List/>
                        </HomeLeft>
                        <HomeRight>
                            <Recommend/>
                            <Writer/>
                        </HomeRight>
                   </HomeWrapper>
            </div>
        );
    }
}

export default Home;